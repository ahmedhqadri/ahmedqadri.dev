"use client"

import { createContext, useContext, useEffect } from 'react'
import type { CSSProperties, ReactNode, RefObject } from 'react'
import {
  motion,
  motionValue,
  useReducedMotion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import type { MotionValue } from 'framer-motion'

/**
 * Scroll-scrubbed assembly. A block's "away" value runs 1 → 0 → 1 as it
 * travels up through the viewport: pieces fly in as the block's top edge
 * comes on screen, hold still the whole time it's being read, and only
 * scatter once its bottom edge is about to leave — in both scroll directions.
 */

/** Share of the viewport the block's top edge crosses while assembling (from the bottom). */
const ENTER = 0.18
/** Share of the viewport the block's bottom edge crosses while scattering (to the top). */
const EXIT = 0.15

/**
 * How far pieces travel from their scattered pose (1 = the full x/y/rotate/scale
 * each piece declares). Kept low so the motion reads as a drift and a fade.
 */
const TRAVEL = 0.45

/**
 * Offsets are authored for a desktop-width page. Narrower screens shrink them
 * in proportion so a phone sees the same drift relative to its width instead
 * of pieces starting half off-screen. The floor keeps the motion perceptible.
 */
const DESIGN_WIDTH = 1280
const MIN_VIEWPORT_SCALE = 0.35

/** One shared value for every piece, fed by a single resize listener. */
const viewportScale = motionValue(1)
let trackingViewport = false

function trackViewport() {
  if (trackingViewport) return
  trackingViewport = true
  const update = () =>
    viewportScale.set(Math.min(1, Math.max(MIN_VIEWPORT_SCALE, window.innerWidth / DESIGN_WIDTH)))
  update()
  window.addEventListener('resize', update)
}

/** Softens wheel steps so the pieces glide rather than tick. */
const SPRING = { stiffness: 140, damping: 28, mass: 0.35, restDelta: 0.0005 }

/**
 * Tracks `ref` and returns its away value (1 = scattered, 0 = in place).
 *
 * The bands also give way at the ends of the page: a block already on screen
 * at scroll 0 (the hero) starts assembled, and a block still on screen at the
 * bottom of the page (skills, footer) finishes assembled.
 */
export function useAlignProgress(ref: RefObject<HTMLElement | null>) {
  const { scrollY } = useScroll()
  const away = useMotionValue(1)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let top = 0
    let height = 0

    const update = () => {
      const vh = window.innerHeight
      const s = window.scrollY
      const maxScroll = document.documentElement.scrollHeight - vh
      // Edge positions in the viewport now, at scroll 0, and at the page bottom.
      const topNow = top - s
      const bottomNow = top + height - s
      const topFirst = top
      const bottomLast = top + height - maxScroll

      const lockIn = topFirst < vh ? Math.max(vh * (1 - ENTER), topFirst) : vh * (1 - ENTER)
      const letGo = bottomLast > 0 ? Math.min(vh * EXIT, bottomLast) : vh * EXIT

      const enter = lockIn >= vh ? 0 : (topNow - lockIn) / (vh - lockIn)
      const exit = letGo <= 0 ? 0 : (letGo - bottomNow) / letGo
      away.set(Math.min(1, Math.max(0, enter, exit)))
    }

    const measure = () => {
      const r = el.getBoundingClientRect()
      top = r.top + window.scrollY
      height = r.height
      update()
    }

    measure()
    const unsubscribe = scrollY.on('change', update)
    const ro = new ResizeObserver(measure)
    ro.observe(document.body)
    window.addEventListener('resize', measure)
    return () => {
      unsubscribe()
      ro.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [ref, scrollY, away])

  return useSpring(away, SPRING)
}

/** Lets a group share one driver so every piece in it locks in on the same beat. */
const AlignContext = createContext<MotionValue<number> | null>(null)

export function AlignGroup({
  progress,
  children,
}: {
  progress: MotionValue<number>
  children: ReactNode
}) {
  return <AlignContext.Provider value={progress}>{children}</AlignContext.Provider>
}

/* Decelerate into the slot: most of the travel happens early in the band. */
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3)

interface AlignProps {
  children: ReactNode
  /** Scattered pose — offsets in px, rotation in degrees. */
  x?: number
  y?: number
  rotate?: number
  scale?: number
  /**
   * 0–1: how much of the approach this piece sits out before moving. Pieces
   * with more lag start later and travel faster, but all land together.
   */
  lag?: number
  /** Overrides the shared driver; otherwise uses the nearest AlignGroup. */
  progress?: MotionValue<number>
  className?: string
  style?: CSSProperties
  as?: 'div' | 'span'
}

export function Align({
  children,
  x = 0,
  y = 0,
  rotate = 0,
  scale = 1,
  lag = 0,
  progress,
  className,
  style,
  as = 'div',
}: AlignProps) {
  const reduceMotion = useReducedMotion()
  const group = useContext(AlignContext)
  const driver = progress ?? group

  if (!driver) throw new Error('<Align> needs a `progress` prop or an <AlignGroup> parent')

  // Lagged pieces stay fully scattered until the shared value drops below 1/(1+lag).
  const t = useTransform(driver, (a) => easeOut(1 - Math.min(1, a * (1 + lag))))
  useEffect(trackViewport, [])

  const tx = useTransform([t, viewportScale], ([v, k]: number[]) => x * TRAVEL * k * (1 - v))
  const ty = useTransform([t, viewportScale], ([v, k]: number[]) => y * TRAVEL * k * (1 - v))
  const tr = useTransform(t, [0, 1], [rotate * TRAVEL, 0])
  const ts = useTransform(t, [0, 1], [1 - (1 - scale) * TRAVEL, 1])
  const opacity = useTransform(t, [0, 1], [0, 1])

  const Tag = as === 'span' ? motion.span : motion.div

  if (reduceMotion) {
    return as === 'span' ? (
      <span className={className} style={style}>{children}</span>
    ) : (
      <div className={className} style={style}>{children}</div>
    )
  }

  return (
    <Tag
      data-align
      className={className}
      style={{ ...style, x: tx, y: ty, rotate: tr, scale: ts, opacity, willChange: 'transform, opacity' }}
    >
      {children}
    </Tag>
  )
}

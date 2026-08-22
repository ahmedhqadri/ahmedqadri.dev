"use client"

import type { CSSProperties, ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

/** Brand ease — matches the CSS var(--ease-out) curve used across the DS. */
export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

interface RevealProps {
  children: ReactNode
  /** Seconds to hold before the transition starts — used to stagger siblings. */
  delay?: number
  /** Rise distance in px. */
  y?: number
  /** Starting scale, for card-like surfaces that should grow in. */
  scale?: number
  className?: string
  style?: CSSProperties
}

/**
 * Framer Motion reveal-on-scroll: fades content up as it enters the viewport,
 * once. Replaces the CSS `.aq-reveal` pattern on the home page; doc pages
 * (/support, /privacy) still use the CSS version via `useReveal`.
 */
export function Reveal({ children, delay = 0, y = 28, scale = 1, className, style }: RevealProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      style={style}
      initial={reduceMotion ? false : { opacity: 0, y, scale }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2, margin: '0px 0px -60px 0px' }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

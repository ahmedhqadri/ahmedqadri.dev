"use client"

import type { CSSProperties, MouseEvent, ReactNode } from 'react'
import { HUES, type Hue } from './eyebrow'

/**
 * AQ Studios — Card
 * Surface container with a hover-lift. `hue` tints the top hairline + glow
 * to theme a section. Set `interactive` for the lift/press response.
 */

interface CardProps {
  children: ReactNode
  hue?: Exclude<Hue, 'muted'>
  interactive?: boolean
  padding?: string
  className?: string
  style?: CSSProperties
}

/** Raw hex per hue, for composing rgba-ish glow strings. */
const GLOW: Record<Exclude<Hue, 'muted'>, string> = {
  aqua: '#00E0C6',
  indigo: '#6E8BFF',
  coral: '#FF7A59',
}

export function Card({
  children,
  hue,
  interactive = false,
  padding = 'var(--space-6)',
  className,
  style,
}: CardProps) {
  const accent = hue ? HUES[hue] : undefined
  const glow = hue ? GLOW[hue] : undefined

  const base: CSSProperties = {
    position: 'relative',
    background: 'var(--surface-card)',
    border: '1px solid var(--border-subtle)',
    borderRadius: 'var(--radius-lg)',
    padding,
    color: 'var(--text-body)',
    overflow: 'hidden',
    transition:
      'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)',
    ...style,
  }

  const onEnter = (e: MouseEvent<HTMLDivElement>) => {
    if (!interactive) return
    e.currentTarget.style.transform = 'translateY(-4px)'
    e.currentTarget.style.boxShadow = glow ? `0 24px 60px -20px ${glow}66` : 'var(--shadow-lg)'
    e.currentTarget.style.borderColor = glow ? `${glow}66` : 'var(--border-strong)'
  }
  const onLeave = (e: MouseEvent<HTMLDivElement>) => {
    if (!interactive) return
    e.currentTarget.style.transform = 'none'
    e.currentTarget.style.boxShadow = 'none'
    e.currentTarget.style.borderColor = 'var(--border-subtle)'
  }

  return (
    <div className={className} style={base} onMouseEnter={onEnter} onMouseLeave={onLeave}>
      {accent && (
        <span
          aria-hidden
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 2,
            zIndex: 2, // stays above full-bleed card media
            background: `linear-gradient(90deg, ${accent}, transparent 70%)`,
          }}
        />
      )}
      {children}
    </div>
  )
}

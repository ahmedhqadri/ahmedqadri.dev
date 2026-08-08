"use client"

import type { CSSProperties, MouseEvent, ReactNode } from 'react'

/**
 * AQ Studios — Button
 * Signature aqua fill + secondary/ghost/solid variants for dark surfaces.
 * Renders as <button> or, with `href`, as <a>.
 */

type Variant = 'primary' | 'secondary' | 'ghost' | 'solid'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps {
  children?: ReactNode
  variant?: Variant
  size?: Size
  iconLeft?: ReactNode
  iconRight?: ReactNode
  fullWidth?: boolean
  disabled?: boolean
  href?: string
  target?: string
  rel?: string
  onClick?: (e: MouseEvent<HTMLElement>) => void
  type?: 'button' | 'submit' | 'reset'
  className?: string
  style?: CSSProperties
  'aria-label'?: string
}

const SIZES: Record<Size, { padding: string; height: number; fontSize: string; gap: number; radius: string }> = {
  sm: { padding: '0 14px', height: 36, fontSize: 'var(--text-sm)', gap: 8, radius: 'var(--radius-sm)' },
  md: { padding: '0 20px', height: 46, fontSize: 'var(--text-base)', gap: 10, radius: 'var(--radius-md)' },
  lg: { padding: '0 28px', height: 56, fontSize: 'var(--text-lg)', gap: 12, radius: 'var(--radius-md)' },
}

const VARIANTS: Record<Variant, CSSProperties> = {
  primary: {
    background: 'var(--accent)',
    color: 'var(--accent-contrast)',
    border: '1px solid var(--accent)',
    boxShadow: 'var(--glow-aqua-soft)',
  },
  secondary: {
    background: 'transparent',
    color: 'var(--text-strong)',
    border: '1px solid var(--border-strong)',
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-body)',
    border: '1px solid transparent',
  },
  solid: {
    background: 'var(--text-strong)',
    color: 'var(--surface-page)',
    border: '1px solid var(--text-strong)',
  },
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  href,
  target,
  rel,
  onClick,
  type = 'button',
  className,
  style,
  'aria-label': ariaLabel,
}: ButtonProps) {
  const s = SIZES[size]
  const v = VARIANTS[variant]

  const base: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    width: fullWidth ? '100%' : 'auto',
    height: s.height,
    padding: s.padding,
    fontFamily: 'var(--font-sans)',
    fontSize: s.fontSize,
    fontWeight: 'var(--fw-semibold)' as unknown as number,
    letterSpacing: 'var(--tracking-snug)',
    lineHeight: 1,
    borderRadius: s.radius,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    transition:
      'transform var(--dur-fast) var(--ease-out), filter var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
    ...v,
    ...style,
  }

  // Hover lifts −1px + brightness 1.06; press scales to 0.98. No color inversion.
  const hover = (e: MouseEvent<HTMLElement>) => {
    if (disabled) return
    e.currentTarget.style.transform = 'translateY(-1px)'
    e.currentTarget.style.filter = 'brightness(1.06)'
    if (variant === 'secondary' || variant === 'ghost') {
      e.currentTarget.style.background = 'var(--border-subtle)'
    }
  }
  const leave = (e: MouseEvent<HTMLElement>) => {
    e.currentTarget.style.transform = 'none'
    e.currentTarget.style.filter = 'none'
    if (variant === 'secondary' || variant === 'ghost') {
      e.currentTarget.style.background = 'transparent'
    }
  }
  const press = (e: MouseEvent<HTMLElement>) => {
    if (!disabled) e.currentTarget.style.transform = 'translateY(0) scale(0.98)'
  }

  const inner = (
    <>
      {iconLeft}
      {children != null && <span>{children}</span>}
      {iconRight}
    </>
  )

  const shared = {
    className,
    style: base,
    'aria-label': ariaLabel,
    onMouseEnter: hover,
    onMouseLeave: leave,
    onMouseDown: press,
    onMouseUp: hover,
  }

  if (href && !disabled) {
    return (
      <a href={href} target={target} rel={rel} onClick={onClick} {...shared}>
        {inner}
      </a>
    )
  }
  return (
    <button type={type} disabled={disabled} onClick={onClick} {...shared}>
      {inner}
    </button>
  )
}

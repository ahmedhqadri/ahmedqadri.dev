import type { CSSProperties, ReactNode } from 'react'

/**
 * AQ Studios — Badge
 * Small mono pill for tags, statuses, categories. Solid/soft/outline tones.
 */

export type BadgeTone = 'aqua' | 'indigo' | 'coral' | 'success' | 'neutral'
export type BadgeVariant = 'solid' | 'soft' | 'outline'

interface BadgeProps {
  children: ReactNode
  tone?: BadgeTone
  variant?: BadgeVariant
  style?: CSSProperties
}

const PALETTE: Record<BadgeTone, { solid: [string, string]; soft: [string, string] }> = {
  aqua: { solid: ['var(--aqua-500)', 'var(--ink-950)'], soft: ['var(--aqua-100)', 'var(--aqua-700)'] },
  indigo: { solid: ['var(--indigo-500)', 'var(--white)'], soft: ['var(--indigo-100)', 'var(--indigo-600)'] },
  coral: { solid: ['var(--coral-500)', 'var(--white)'], soft: ['var(--coral-100)', 'var(--coral-600)'] },
  success: { solid: ['var(--success-500)', 'var(--ink-950)'], soft: ['rgba(47,191,113,0.16)', 'var(--success-500)'] },
  neutral: { solid: ['var(--text-strong)', 'var(--surface-page)'], soft: ['var(--border-subtle)', 'var(--text-body)'] },
}

export function Badge({ children, tone = 'neutral', variant = 'soft', style }: BadgeProps) {
  const p = PALETTE[tone]

  let bg: string
  let color: string
  let border = 'none'

  if (variant === 'solid') {
    ;[bg, color] = p.solid
  } else if (variant === 'outline') {
    bg = 'transparent'
    color = p.soft[1]
    border = `1px solid ${p.soft[1]}`
  } else {
    ;[bg, color] = p.soft
  }

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        padding: '4px 10px',
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-2xs)',
        fontWeight: 'var(--fw-regular)' as unknown as number,
        letterSpacing: 'var(--tracking-wide)',
        textTransform: 'uppercase',
        lineHeight: 1,
        borderRadius: 'var(--radius-pill)',
        background: bg,
        color,
        border,
        ...style,
      }}
    >
      {children}
    </span>
  )
}

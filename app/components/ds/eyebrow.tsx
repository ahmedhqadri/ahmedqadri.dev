import type { CSSProperties, ReactNode } from 'react'

/**
 * AQ Studios — Eyebrow
 * Mono, uppercase, wide-tracked kicker above section headings,
 * with a glowing dot in a service hue.
 */

export type Hue = 'aqua' | 'indigo' | 'coral' | 'muted'

interface EyebrowProps {
  children: ReactNode
  hue?: Hue
  dot?: boolean
  style?: CSSProperties
}

export const HUES: Record<Hue, string> = {
  aqua: 'var(--aqua-500)',
  indigo: 'var(--indigo-500)',
  coral: 'var(--coral-500)',
  muted: 'var(--text-muted)',
}

export function Eyebrow({ children, hue = 'aqua', dot = true, style }: EyebrowProps) {
  const c = HUES[hue]
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-xs)',
        fontWeight: 'var(--fw-regular)' as unknown as number,
        letterSpacing: 'var(--tracking-caps)',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
        ...style,
      }}
    >
      {dot && (
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: '50%',
            background: c,
            boxShadow: `0 0 10px ${c}`,
          }}
        />
      )}
      {children}
    </span>
  )
}

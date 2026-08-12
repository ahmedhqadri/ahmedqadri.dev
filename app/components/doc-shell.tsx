"use client"

import type { ReactNode } from 'react'
import { Eyebrow, type Hue } from './ds/eyebrow'
import Header from './header'
import Footer from './footer'
import { useParallax, useReveal } from './ds/motion'

/**
 * AQ Studios — document page shell.
 * A masthead plus a single measured column, for the long-form pages the app
 * stores link to. Content is passed as children and styled by `.aq-doc`.
 */

interface DocShellProps {
  eyebrow: string
  hue?: Hue
  title: string
  lede: string
  /** Small mono line under the lede — effective dates, response times. */
  meta?: string
  actions?: ReactNode
  children: ReactNode
}

export default function DocShell({
  eyebrow,
  hue = 'aqua',
  title,
  lede,
  meta,
  actions,
  children,
}: DocShellProps) {
  useParallax()
  useReveal()

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Header activeSection="" />

      <main>
        <section
          style={{
            position: 'relative',
            background: 'var(--ink-950)',
            padding: 'calc(var(--section-y-tight) + 72px) var(--gutter) var(--section-y-tight)',
            overflow: 'hidden',
          }}
        >
          <div
            aria-hidden
            className="aq-grid-floor"
            style={{ position: 'absolute', inset: 0, opacity: 0.6, pointerEvents: 'none' }}
          />
          <div
            aria-hidden
            data-depth="0.14"
            style={{
              position: 'absolute',
              top: '-30%',
              left: '50%',
              width: 720,
              height: 720,
              marginLeft: -360,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(0,224,198,0.13), transparent 62%)',
              filter: 'blur(30px)',
              pointerEvents: 'none',
            }}
          />

          <div style={{ position: 'relative', maxWidth: 'var(--container-max)', margin: '0 auto' }}>
            <div className="aq-reveal">
              <Eyebrow hue={hue}>{eyebrow}</Eyebrow>

              <h1
                style={{
                  margin: '18px 0 0',
                  maxWidth: '18ch',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 500,
                  fontSize: 'var(--display-lg)',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.03,
                  color: 'var(--text-strong)',
                }}
              >
                {title}
              </h1>

              <p
                style={{
                  margin: '20px 0 0',
                  maxWidth: '54ch',
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'var(--text-lg)',
                  lineHeight: 1.6,
                  color: 'var(--text-muted)',
                  textWrap: 'pretty',
                }}
              >
                {lede}
              </p>

              {meta && (
                <p
                  className="aq-mono"
                  style={{
                    margin: '22px 0 0',
                    fontSize: 'var(--text-2xs)',
                    color: 'var(--text-faint)',
                  }}
                >
                  {meta}
                </p>
              )}

              {actions && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 'var(--space-6)' }}>
                  {actions}
                </div>
              )}
            </div>
          </div>
        </section>

        <section
          style={{
            background: 'var(--ink-900)',
            borderTop: '1px solid var(--border-subtle)',
            padding: 'var(--section-y-tight) var(--gutter) var(--section-y)',
          }}
        >
          <div className="aq-reveal" style={{ maxWidth: 760, margin: '0 auto' }}>
            {children}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

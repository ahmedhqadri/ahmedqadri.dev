"use client"

import { ArrowUpRight } from 'lucide-react'
import { Button } from './ds/button'
import { Eyebrow } from './ds/eyebrow'
import { SOCIAL_LINKS } from './social-links'

const TAGLINE = 'Full-stack developer building scalable, user-focused applications.'

export default function Hero() {
  const [primary, ...secondary] = SOCIAL_LINKS

  return (
    <section
      id="top"
      style={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        padding: 'calc(var(--space-14) + 40px) var(--gutter) var(--space-12)',
        background: 'radial-gradient(120% 90% at 70% 0%, #0d1720 0%, var(--ink-950) 60%)',
      }}
    >
      {/* Grid floor */}
      <div aria-hidden data-depth="0.05" className="aq-grid-floor" style={{ position: 'absolute', inset: 0 }} />

      {/* Parallax glow orbs — aqua signature, indigo counterweight */}
      <div
        aria-hidden
        data-depth="0.18"
        style={{
          position: 'absolute',
          top: '8%',
          right: '6%',
          width: 460,
          height: 460,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,224,198,0.30), transparent 62%)',
          filter: 'blur(20px)',
        }}
      />
      <div
        aria-hidden
        data-depth="0.3"
        style={{
          position: 'absolute',
          bottom: '4%',
          left: '-4%',
          width: 340,
          height: 340,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(110,139,255,0.22), transparent 65%)',
          filter: 'blur(24px)',
        }}
      />

      <div
        className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] items-center"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: 'var(--container-wide)',
          margin: '0 auto',
          gap: 'var(--space-9)',
        }}
      >
        <div className="aq-reveal">
          <Eyebrow hue="aqua">Hi, I&apos;m</Eyebrow>

          <h1
            style={{
              margin: '20px 0 0',
              fontFamily: 'var(--font-display)',
              fontWeight: 500,
              fontSize: 'var(--display-hero)',
              lineHeight: 0.98,
              letterSpacing: '-0.035em',
              color: 'var(--text-strong)',
            }}
          >
            Ahmed
            <br />
            Qadri<span style={{ color: 'var(--aqua-500)' }}>.</span>
          </h1>

          <p
            style={{
              margin: '26px 0 0',
              maxWidth: '46ch',
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--text-xl)',
              lineHeight: 1.5,
              color: 'var(--text-body)',
              textWrap: 'pretty',
            }}
          >
            {TAGLINE}
          </p>

          <div style={{ display: 'flex', gap: 14, marginTop: 34, flexWrap: 'wrap' }}>
            <Button
              variant="primary"
              size="lg"
              href={primary.href}
              target="_blank"
              rel="noopener noreferrer"
              iconLeft={primary.icon}
              iconRight={<ArrowUpRight size={20} strokeWidth={2} />}
            >
              {primary.label}
            </Button>
            {secondary.map((link) => (
              <Button
                key={link.label}
                variant="secondary"
                size="lg"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                iconLeft={link.icon}
              >
                {link.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Floating code mock */}
        <div data-depth="0.12" className="hidden lg:block aq-reveal" style={{ position: 'relative' }}>
          <div
            style={{
              position: 'relative',
              background: 'var(--ink-800)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-xl)',
              padding: 18,
              boxShadow: 'var(--shadow-xl)',
            }}
          >
            <div style={{ display: 'flex', gap: 7, marginBottom: 14 }}>
              {['var(--coral-500)', 'var(--sun-500)', 'var(--aqua-500)'].map((c) => (
                <span key={c} style={{ width: 11, height: 11, borderRadius: '50%', background: c }} />
              ))}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 13,
                lineHeight: 1.8,
                color: 'var(--text-muted)',
              }}
            >
              <div>
                <span style={{ color: 'var(--indigo-500)' }}>const</span>{' '}
                <span style={{ color: 'var(--text-strong)' }}>ahmed</span> ={' '}
                <span style={{ color: 'var(--aqua-300)' }}>developer</span>({'{'}
              </div>
              <div style={{ paddingLeft: 20 }}>
                stack: [<span style={{ color: 'var(--coral-500)' }}>&apos;TypeScript&apos;</span>,{' '}
                <span style={{ color: 'var(--coral-500)' }}>&apos;React&apos;</span>],
              </div>
              <div style={{ paddingLeft: 20 }}>
                also: [<span style={{ color: 'var(--coral-500)' }}>&apos;Node&apos;</span>,{' '}
                <span style={{ color: 'var(--coral-500)' }}>&apos;Python&apos;</span>,{' '}
                <span style={{ color: 'var(--coral-500)' }}>&apos;AWS&apos;</span>],
              </div>
              <div style={{ paddingLeft: 20 }}>
                builds: <span style={{ color: 'var(--coral-500)' }}>&apos;scalable, user-focused apps&apos;</span>,
              </div>
              <div>{'}'});</div>
              <div style={{ marginTop: 10, color: 'var(--aqua-500)' }}>→ github.com/ahmedhqadri</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          bottom: 26,
          left: '50%',
          transform: 'translateX(-50%)',
          fontFamily: 'var(--font-mono)',
          fontSize: 10,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--text-faint)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
        }}
      >
        Scroll
        <span
          style={{ width: 1, height: 30, background: 'linear-gradient(var(--aqua-500), transparent)' }}
        />
      </div>
    </section>
  )
}

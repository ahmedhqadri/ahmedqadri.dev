"use client"

import Link from 'next/link'
import { scrollToSection } from './ds/motion'
import { SOCIAL_LINKS } from './social-links'

const SECTIONS: [label: string, id: string][] = [
  ['Projects', 'projects'],
  ['Skills', 'skills'],
]

/** Linked from the app store listings, so these must stay reachable. */
const APP_PAGES: [label: string, href: string][] = [
  ['Support', '/support'],
  ['Privacy Policy', '/privacy'],
]

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--ink-950)',
        borderTop: '1px solid var(--border-subtle)',
        padding: 'var(--space-11) var(--gutter) var(--space-7)',
      }}
    >
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]"
          style={{ gap: 'var(--space-8)' }}
        >
          <div>
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('top')
              }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 11, textDecoration: 'none' }}
            >
              <span
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: 5,
                  background: 'var(--aqua-500)',
                  boxShadow: 'var(--glow-aqua-soft)',
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: 19,
                  letterSpacing: '-0.03em',
                  color: 'var(--text-strong)',
                }}
              >
                Ahmed<span style={{ color: 'var(--aqua-500)' }}>·</span>Qadri
              </span>
            </a>

            <p
              style={{
                margin: '18px 0 0',
                maxWidth: '32ch',
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--text-base)',
                lineHeight: 1.55,
                color: 'var(--text-muted)',
                textWrap: 'pretty',
              }}
            >
              Full-stack developer building scalable, user-focused applications.
            </p>

            <div style={{ display: 'flex', gap: 12, marginTop: 22 }}>
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-muted)',
                    transition:
                      'color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--text-strong)'
                    e.currentTarget.style.borderColor = 'var(--border-strong)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-muted)'
                    e.currentTarget.style.borderColor = 'var(--border-subtle)'
                  }}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--text-faint)',
                marginBottom: 16,
              }}
            >
              Sections
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11, alignItems: 'flex-start' }}>
              {SECTIONS.map(([label, id]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(id)
                  }}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'var(--text-base)',
                    color: 'var(--text-muted)',
                  }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--text-faint)',
                marginBottom: 16,
              }}
            >
              Elsewhere
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11, alignItems: 'flex-start' }}>
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'var(--text-base)',
                    color: 'var(--text-muted)',
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--text-faint)',
                marginBottom: 16,
              }}
            >
              Apps
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11, alignItems: 'flex-start' }}>
              {APP_PAGES.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'var(--text-base)',
                    color: 'var(--text-muted)',
                  }}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 12,
            marginTop: 'var(--space-9)',
            paddingTop: 'var(--space-5)',
            borderTop: '1px solid var(--border-subtle)',
          }}
        >
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-faint)' }}>
            © {new Date().getFullYear()} Ahmed Qadri
          </span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-faint)' }}>
            All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  )
}

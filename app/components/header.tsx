"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ArrowRight, Menu, X } from 'lucide-react'
import { Button } from './ds/button'
import { scrollToSection } from './ds/motion'

interface HeaderProps {
  activeSection: string
}

const NAV_ITEMS: [label: string, id: string][] = [
  ['Projects', 'projects'],
  ['Skills', 'skills'],
]

const CONTACT_HREF = 'https://www.linkedin.com/in/ahmedhqadri/'

export default function Header({ activeSection }: HeaderProps) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Fixed glass bar that shrinks and frosts once you leave the hero.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id: string) => {
    setOpen(false)
    scrollToSection(id)
  }

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: scrolled ? '12px var(--gutter)' : '20px var(--gutter)',
        background: scrolled ? 'var(--glass-ink)' : 'transparent',
        backdropFilter: scrolled ? 'var(--blur-glass)' : 'none',
        WebkitBackdropFilter: scrolled ? 'var(--blur-glass)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
        transition: 'all var(--dur-base) var(--ease-out)',
      }}
    >
      {/* Wordmark */}
      <a
        href="#top"
        onClick={(e) => {
          e.preventDefault()
          go('top')
        }}
        style={{ display: 'inline-flex', alignItems: 'center', gap: 11, textDecoration: 'none' }}
      >
        <span
          style={{
            position: 'relative',
            width: 30,
            height: 30,
            borderRadius: 9,
            overflow: 'hidden',
            border: '1px solid var(--border-strong)',
            boxShadow: 'var(--glow-aqua-soft)',
            flexShrink: 0,
          }}
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1688941303542-oAaKLRq68e0AFoRmz9sZKaKC2l4Atb.jpeg"
            alt="Ahmed Qadri"
            fill
            className="object-cover"
            sizes="30px"
            priority
          />
        </span>
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

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-1">
        {NAV_ITEMS.map(([label, id]) => {
          const active = activeSection === id
          return (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault()
                go(id)
              }}
              style={{
                position: 'relative',
                padding: '8px 14px',
                fontFamily: 'var(--font-sans)',
                fontSize: 15,
                fontWeight: 500,
                color: active ? 'var(--text-strong)' : 'var(--text-body)',
                textDecoration: 'none',
                borderRadius: 'var(--radius-sm)',
                transition: 'color var(--dur-fast) var(--ease-out)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-strong)')}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = active ? 'var(--text-strong)' : 'var(--text-body)')
              }
            >
              {label}
              {active && (
                <span
                  aria-hidden
                  style={{
                    position: 'absolute',
                    left: 14,
                    right: 14,
                    bottom: 2,
                    height: 1,
                    background: 'var(--aqua-500)',
                    boxShadow: '0 0 10px var(--aqua-500)',
                  }}
                />
              )}
            </a>
          )
        })}
        <div style={{ marginLeft: 10 }}>
          <Button
            variant="primary"
            size="sm"
            href={CONTACT_HREF}
            target="_blank"
            rel="noopener noreferrer"
            iconRight={<ArrowRight size={16} strokeWidth={2} />}
          >
            Get in touch
          </Button>
        </div>
      </nav>

      {/* Mobile trigger */}
      <button
        type="button"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="inline-flex md:hidden"
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: 42,
          height: 42,
          borderRadius: 'var(--radius-md)',
          background: 'transparent',
          border: '1px solid var(--border-strong)',
          color: 'var(--text-strong)',
          cursor: 'pointer',
        }}
      >
        {open ? <X size={20} strokeWidth={2} /> : <Menu size={20} strokeWidth={2} />}
      </button>

      {/* Mobile sheet */}
      {open && (
        <div
          className="flex md:hidden"
          style={{
            position: 'fixed',
            top: 68,
            left: 'var(--gutter)',
            right: 'var(--gutter)',
            background: 'var(--surface-raised)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: 12,
            boxShadow: 'var(--shadow-lg)',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          {NAV_ITEMS.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault()
                go(id)
              }}
              style={{
                padding: '12px 14px',
                fontFamily: 'var(--font-sans)',
                fontSize: 16,
                color: 'var(--text-body)',
                textDecoration: 'none',
                borderRadius: 'var(--radius-sm)',
              }}
            >
              {label}
            </a>
          ))}
          <div style={{ padding: 8 }}>
            <Button
              variant="primary"
              fullWidth
              href={CONTACT_HREF}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              Get in touch
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

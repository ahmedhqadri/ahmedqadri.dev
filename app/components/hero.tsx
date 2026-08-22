"use client"

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Button } from './ds/button'
import { Eyebrow } from './ds/eyebrow'
import { EASE } from './ds/reveal'
import { SOCIAL_LINKS } from './social-links'

const TAGLINE = 'Full-stack developer building scalable, user-focused applications.'

/* Staggered entrance for the intro column. */
const introContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const introItem = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
}

/**
 * Glowing streaks that travel along the grid-floor lines — one horizontal,
 * one vertical. They live inside the grid layer so they share its parallax
 * transform and radial mask, and sit on 64px multiples to match the lines.
 */
function GridStreaks() {
  return (
    <>
      <motion.span
        style={{
          position: 'absolute',
          top: 255,
          left: 0,
          width: 220,
          height: 2,
          borderRadius: 2,
          background: 'linear-gradient(90deg, transparent, var(--aqua-500), transparent)',
          boxShadow: '0 0 14px rgba(0, 224, 198, 0.65)',
        }}
        initial={{ x: '-25vw' }}
        animate={{ x: '105vw' }}
        transition={{ duration: 9, ease: 'linear', repeat: Infinity, repeatDelay: 5, delay: 1 }}
      />
      <motion.span
        style={{
          position: 'absolute',
          top: 0,
          left: 319,
          width: 2,
          height: 220,
          borderRadius: 2,
          background: 'linear-gradient(180deg, transparent, var(--indigo-500), transparent)',
          boxShadow: '0 0 14px rgba(110, 139, 255, 0.6)',
        }}
        initial={{ y: '-30vh' }}
        animate={{ y: '105vh' }}
        transition={{ duration: 11, ease: 'linear', repeat: Infinity, repeatDelay: 6, delay: 5 }}
      />
    </>
  )
}

export default function Hero() {
  const [primary, ...secondary] = SOCIAL_LINKS
  const reduceMotion = useReducedMotion()

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
      {/* Grid floor, with light streaks running along its lines */}
      <div aria-hidden data-depth="0.05" className="aq-grid-floor" style={{ position: 'absolute', inset: 0 }}>
        {!reduceMotion && <GridStreaks />}
      </div>

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
        <motion.div
          variants={introContainer}
          initial={reduceMotion ? false : 'hidden'}
          animate="visible"
        >
          <motion.div variants={introItem}>
            <Eyebrow hue="aqua">Hi, I&apos;m</Eyebrow>
          </motion.div>

          <motion.h1
            variants={introItem}
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
          </motion.h1>

          <motion.p
            variants={introItem}
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
          </motion.p>

          <motion.div
            variants={introItem}
            style={{ display: 'flex', gap: 14, marginTop: 34, flexWrap: 'wrap' }}
          >
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
          </motion.div>
        </motion.div>

        {/* Code mock — entrance fade, then an aqua/indigo light traces the
            border, echoing the grid streaks. The beam layer is masked down to
            the 1.5px border ring, and the conic gradient rotates beneath it. */}
        <div data-depth="0.12" className="hidden lg:block" style={{ position: 'relative' }}>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: EASE }}
            style={{
              position: 'relative',
              background: 'var(--ink-800)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-xl)',
              padding: 18,
              boxShadow: 'var(--shadow-xl)',
            }}
          >
            {!reduceMotion && (
              <div
                aria-hidden
                style={{
                  position: 'absolute',
                  inset: -1,
                  borderRadius: 'var(--radius-xl)',
                  padding: 1.5,
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  maskComposite: 'exclude',
                  overflow: 'hidden',
                  pointerEvents: 'none',
                }}
              >
                <motion.div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: 700,
                    height: 700,
                    marginTop: -350,
                    marginLeft: -350,
                    background:
                      'conic-gradient(from 0deg, transparent 0deg 55deg, var(--aqua-500) 90deg, transparent 125deg 235deg, var(--indigo-500) 270deg, transparent 305deg 360deg)',
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 9, ease: 'linear', repeat: Infinity }}
                />
              </div>
            )}
            <div>
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
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        aria-hidden
        animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
        transition={{ duration: 2.4, ease: 'easeInOut', repeat: Infinity }}
        style={{
          position: 'absolute',
          bottom: 26,
          left: '50%',
          x: '-50%',
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
      </motion.div>
    </section>
  )
}

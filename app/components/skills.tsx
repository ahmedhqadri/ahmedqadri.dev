"use client"

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Eyebrow } from './ds/eyebrow'
import { Align, AlignGroup, useAlignProgress } from './ds/scroll-align'

const skills = [
  "JavaScript", "TypeScript", "React", "Next.js", "Node.js",
  "Python", "Express", "MongoDB", "PostgreSQL", "HTML / CSS",
  "Tailwind", "Git", "System Design", "AWS", "REST & GraphQL",
  "Microservices", "CI/CD", "Docker", "Kubernetes", "Testing", "Agile",
]

/*
 * Chips start strewn around the wall and fly into their slots as it scrolls
 * to the centre. Golden-angle spacing spreads them evenly in every direction;
 * the other values are cheap deterministic jitter so the layout is stable.
 */
function scatter(i: number) {
  const angle = i * 2.39996
  const radius = 240 + ((i * 53) % 180)
  return {
    x: Math.round(Math.cos(angle) * radius),
    y: Math.round(Math.sin(angle) * radius * 0.6),
    rotate: ((i * 47) % 36) - 18,
    lag: ((i * 0.37) % 1) * 0.6,
  }
}

function SkillChip({ name, index }: { name: string; index: number }) {
  return (
    <Align as="span" scale={0.6} {...scatter(index)}>
      <motion.span
        whileHover={{ y: -2 }}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          padding: '10px 18px',
          borderRadius: 'var(--radius-pill)',
          border: '1px solid var(--border-subtle)',
          background: 'var(--surface-raised)',
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--text-xs)',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'var(--text-muted)',
          whiteSpace: 'nowrap',
          transition:
            'color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = 'var(--text-strong)'
          e.currentTarget.style.borderColor = 'var(--aqua-600)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = 'var(--text-muted)'
          e.currentTarget.style.borderColor = 'var(--border-subtle)'
        }}
      >
        {name}
      </motion.span>
    </Align>
  )
}

/**
 * The design system's light `.on-paper` mode — one paper section gives the
 * dark-forward page its contrast beat.
 */
export default function Skills() {
  const headerRef = useRef<HTMLDivElement>(null)
  const wallRef = useRef<HTMLDivElement>(null)
  const headerAlign = useAlignProgress(headerRef)
  const wallAlign = useAlignProgress(wallRef)

  return (
    <section
      id="skills"
      className="on-paper"
      style={{
        position: 'relative',
        background: 'var(--surface-page)',
        padding: 'var(--section-y) var(--gutter)',
        overflow: 'hidden',
      }}
    >
      {/* Aqua glow orb, parallaxed behind the stack */}
      <div
        aria-hidden
        data-depth="0.16"
        style={{
          position: 'absolute',
          top: '6%',
          left: '50%',
          width: 680,
          height: 680,
          marginLeft: -340,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,224,198,0.16), transparent 62%)',
          filter: 'blur(30px)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <AlignGroup progress={headerAlign}>
          <div ref={headerRef} style={{ textAlign: 'center', maxWidth: '40ch', margin: '0 auto var(--space-8)' }}>
            <Align x={-200} lag={0.25} style={{ display: 'flex', justifyContent: 'center' }}>
              <Eyebrow hue="indigo">What I work with</Eyebrow>
            </Align>
            <Align x={200} rotate={3}>
              <h2
                style={{
                  margin: '16px 0 0',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 500,
                  fontSize: 'var(--display-lg)',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.05,
                  color: 'var(--text-strong)',
                }}
              >
                Skills &amp; Tools
              </h2>
            </Align>
          </div>
        </AlignGroup>

        <AlignGroup progress={wallAlign}>
          <div
            ref={wallRef}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 12,
              maxWidth: 900,
              margin: '0 auto',
            }}
          >
            {skills.map((skill, i) => (
              <SkillChip key={skill} name={skill} index={i} />
            ))}
          </div>
        </AlignGroup>
      </div>
    </section>
  )
}

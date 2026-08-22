"use client"

import { motion, useReducedMotion } from 'framer-motion'
import { Eyebrow } from './ds/eyebrow'
import { EASE, Reveal } from './ds/reveal'

const skills = [
  "JavaScript", "TypeScript", "React", "Next.js", "Node.js",
  "Python", "Express", "MongoDB", "PostgreSQL", "HTML / CSS",
  "Tailwind", "Git", "System Design", "AWS", "REST & GraphQL",
  "Microservices", "CI/CD", "Docker", "Kubernetes", "Testing", "Agile",
]

/* Chips cascade in a quick wave once the wall scrolls into view. */
const chipWall = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.03 } },
}

const chip = {
  hidden: { opacity: 0, y: 14, scale: 0.94 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: EASE } },
}

function SkillChip({ name }: { name: string }) {
  return (
    <motion.span
      variants={chip}
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
  )
}

/**
 * The design system's light `.on-paper` mode — one paper section gives the
 * dark-forward page its contrast beat.
 */
export default function Skills() {
  const reduceMotion = useReducedMotion()

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
        <Reveal style={{ textAlign: 'center', maxWidth: '40ch', margin: '0 auto var(--space-8)' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Eyebrow hue="indigo">What I work with</Eyebrow>
          </div>
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
        </Reveal>

        <motion.div
          variants={chipWall}
          initial={reduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 12,
            maxWidth: 900,
            margin: '0 auto',
          }}
        >
          {skills.map((skill) => (
            <SkillChip key={skill} name={skill} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

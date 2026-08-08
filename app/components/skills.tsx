"use client"

import { Eyebrow } from './ds/eyebrow'

const skills = [
  "JavaScript", "TypeScript", "React", "Next.js", "Node.js",
  "Python", "Express", "MongoDB", "PostgreSQL", "HTML / CSS",
  "Tailwind", "Git", "System Design", "AWS", "REST & GraphQL",
  "Microservices", "CI/CD", "Docker", "Kubernetes", "Testing", "Agile",
]

function SkillChip({ name }: { name: string }) {
  return (
    <span
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
          'color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = 'var(--text-strong)'
        e.currentTarget.style.borderColor = 'var(--aqua-600)'
        e.currentTarget.style.transform = 'translateY(-1px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = 'var(--text-muted)'
        e.currentTarget.style.borderColor = 'var(--border-subtle)'
        e.currentTarget.style.transform = 'none'
      }}
    >
      {name}
    </span>
  )
}

/**
 * The design system's light `.on-paper` mode — one paper section gives the
 * dark-forward page its contrast beat.
 */
export default function Skills() {
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
        <div
          className="aq-reveal"
          style={{ textAlign: 'center', maxWidth: '40ch', margin: '0 auto var(--space-8)' }}
        >
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
        </div>

        <div
          className="aq-reveal"
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
        </div>
      </div>
    </section>
  )
}

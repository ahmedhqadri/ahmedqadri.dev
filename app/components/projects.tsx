"use client"

import { useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight, CodeXml } from 'lucide-react'
import { Badge } from './ds/badge'
import { Eyebrow } from './ds/eyebrow'
import type { Hue } from './ds/eyebrow'
import { Reveal } from './ds/reveal'

const projects = [
  {
    title: "Core Demo Application",
    description: "LaunchDarkly capabilities demo showcasing feature management at scale.",
    technologies: ["Next.js", "LaunchDarkly", "AWS"],
    repo: "https://github.com/launchdarkly-labs/ld-core-demo",
    link: "https://aqadri.launchdarklydemos.com/",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-12%20at%202.05.02%E2%80%AFPM-lUXiV3L4eeaiblRxJSMqyc2GbboBsi.png"
  },
  {
    title: "Retail Demo App",
    description: "Retail web app demonstrating feature flags in e-commerce.",
    technologies: ["Next.js", "LaunchDarkly"],
    repo: "https://github.com/ahmedhqadri/retail-demo-app",
    link: "https://github.com/ahmedhqadri/retail-demo-app",
    image: "/retail-demo-app.png"
  },
  {
    title: "Insurance AI Chatbot",
    description: "AI-powered chatbot for insurance customer queries and support.",
    technologies: ["Next.js", "LaunchDarkly"],
    repo: "https://github.com/ahmedhqadri/InsuranceBot",
    link: "https://github.com/ahmedhqadri/InsuranceBot",
    image: "/insurance-chatbot-app.png"
  },
]

/* Each item takes a service hue so the grid changes temperature across the row. */
const HUE_CYCLE: Exclude<Hue, 'muted'>[] = ['aqua', 'indigo', 'coral']

/* Raw hex per hue, for composing the hue-tinted hover glow. */
const HUE_HEX: Record<Exclude<Hue, 'muted'>, string> = {
  aqua: '#00E0C6',
  indigo: '#6E8BFF',
  coral: '#FF7A59',
}

/**
 * Follows the design system's portfolio pattern (`ui_kits/website/Work.jsx`):
 * the cover is its own bordered frame and the meta sits outside it, on the
 * section background — not a full-bleed image inside a Card surface. The DS
 * `Card` primitive is a text surface (it backs the Services cards), which is
 * why the earlier full-bleed version fought its clip.
 */
function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const [hover, setHover] = useState(false)
  const hue = HUE_CYCLE[index % HUE_CYCLE.length]
  const hex = HUE_HEX[hue]

  return (
    <Reveal delay={(index % 3) * 0.12} y={48} scale={0.92}>
      <article onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      {/* Cover frame — zooms 1.06 on hover, glass arrow chip reveals. Its own
          hairline border defines the edge, so the clip boundary is never bare. */}
      <div
        style={{
          position: 'relative',
          aspectRatio: '16 / 10',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          border: '1px solid',
          borderColor: hover ? `${hex}66` : 'var(--border-subtle)',
          background: 'var(--ink-900)',
          boxShadow: hover ? `0 24px 60px -20px ${hex}55` : 'none',
          transition:
            'border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            transform: hover ? 'scale(1.06)' : 'scale(1)',
            transition: 'transform var(--dur-slow) var(--ease-out)',
          }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'cover' }}
          />
        </div>

        <div
          aria-hidden
          className="aq-glass"
          style={{
            position: 'absolute',
            bottom: 14,
            right: 14,
            width: 40,
            height: 40,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-strong)',
            opacity: hover ? 1 : 0,
            transform: hover ? 'translateY(0)' : 'translateY(6px)',
            transition: 'all var(--dur-base) var(--ease-out)',
          }}
        >
          <ArrowUpRight size={18} strokeWidth={2} />
        </div>
      </div>

      {/* Meta, on the section background */}
      <div style={{ marginTop: 16 }}>
        <h3
          style={{
            margin: 0,
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-xl)',
            fontWeight: 500,
            letterSpacing: '-0.02em',
            color: 'var(--text-strong)',
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            margin: '6px 0 0',
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--text-sm)',
            lineHeight: 1.55,
            color: 'var(--text-muted)',
            textWrap: 'pretty',
          }}
        >
          {project.description}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, margin: '16px 0 18px' }}>
          {project.technologies.map((tech) => (
            <Badge key={tech} tone="neutral" variant="soft">
              {tech}
            </Badge>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--text-sm)',
              fontWeight: 600,
              color: 'var(--text-strong)',
            }}
          >
            View project
            <ArrowUpRight size={15} strokeWidth={2} />
          </a>
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xs)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--text-faint)',
            }}
          >
            <CodeXml size={14} strokeWidth={2} />
            Source
          </a>
        </div>
        </div>
      </article>
    </Reveal>
  )
}

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        position: 'relative',
        background: 'var(--ink-900)',
        padding: 'var(--section-y) var(--gutter)',
      }}
    >
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <Reveal
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: 24,
            flexWrap: 'wrap',
            marginBottom: 'var(--space-8)',
          }}
        >
          <div>
            <Eyebrow hue="aqua">Selected work</Eyebrow>
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
              Projects
            </h2>
          </div>
          <p
            style={{
              maxWidth: '34ch',
              margin: 0,
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--text-lg)',
              lineHeight: 1.55,
              color: 'var(--text-muted)',
              textWrap: 'pretty',
            }}
          >
            A collection of projects I've worked on.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px]">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import type { PanInfo } from 'framer-motion'
import { ArrowLeft, ArrowRight, ArrowUpRight, CodeXml } from 'lucide-react'
import { Badge } from './ds/badge'
import { Eyebrow } from './ds/eyebrow'
import type { Hue } from './ds/eyebrow'
import { EASE, Reveal } from './ds/reveal'

type Project = {
  title: string
  description: string
  technologies: string[]
  repo?: string
  link: string
  image: string
}

const projects: Project[] = [
  {
    title: "LaunchDarkly Demo Application",
    description: "LaunchDarkly capabilities demo showcasing feature management at scale.",
    technologies: ["Next.js", "LaunchDarkly", "AWS"],
    repo: "https://github.com/launchdarkly-labs/ld-core-demo",
    link: "https://aqadri.launchdarklydemos.com/",
    image: "/launchdarkly-demo-app.jpg"
  },
  {
    title: "ToggleStore",
    description: "LaunchDarkly Events App built for AWS re:Invent '25.",
    technologies: ["Next.js", "LaunchDarkly", "AWS"],
    link: "https://togglestore.launchdarklydemos.com/",
    image: "/togglestore-app.jpg"
  },
  {
    title: "Retail Demo App",
    description: "Retail web app demonstrating feature flags in e-commerce.",
    technologies: ["Next.js", "LaunchDarkly"],
    repo: "https://github.com/ahmedhqadri/retail-demo-app",
    link: "https://github.com/ahmedhqadri/retail-demo-app",
    image: "/retail-demo-app.png"
  },
]

/* Each slide takes a service hue so the showcase changes temperature as it turns. */
const HUE_CYCLE: Exclude<Hue, 'muted'>[] = ['aqua', 'indigo', 'coral']

const HUE_HEX: Record<Exclude<Hue, 'muted'>, string> = {
  aqua: '#00E0C6',
  indigo: '#6E8BFF',
  coral: '#FF7A59',
}

/** How long a pointer has to rest on an arrow before the deck turns by itself. */
const DWELL_SECONDS = 2.5

const pad = (n: number) => String(n + 1).padStart(2, '0')

/* ------------------------------------------------------------------ */
/* Arrow button with a dwell ring: hover and the ring fills; when it   */
/* closes the deck advances, then the ring restarts while you linger.  */
/* ------------------------------------------------------------------ */
function NavButton({
  direction,
  hue,
  onAdvance,
}: {
  direction: -1 | 1
  hue: string
  onAdvance: () => void
}) {
  const [hovered, setHovered] = useState(false)
  const [cycle, setCycle] = useState(0)
  const Icon = direction === 1 ? ArrowRight : ArrowLeft
  const label = direction === 1 ? 'Next project' : 'Previous project'

  return (
    <motion.button
      type="button"
      aria-label={label}
      onClick={() => {
        onAdvance()
        // A click restarts the dwell ring from zero instead of continuing the partial fill.
        setCycle((c) => c + 1)
      }}
      onPointerEnter={(e) => {
        if (e.pointerType === 'mouse') setHovered(true)
      }}
      onPointerLeave={() => setHovered(false)}
      whileTap={{ scale: 0.92 }}
      className="aq-glass"
      style={{
        position: 'relative',
        width: 56,
        height: 56,
        borderRadius: '50%',
        border: '1px solid',
        borderColor: hovered ? `${hue}80` : 'var(--border-strong)',
        color: 'var(--text-strong)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        boxShadow: hovered ? `0 0 0 1px ${hue}22, 0 12px 32px -12px ${hue}99` : 'none',
        transition:
          'border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      }}
    >
      <motion.span
        aria-hidden
        animate={{ x: hovered ? direction * 2 : 0 }}
        transition={{ duration: 0.3, ease: EASE }}
        style={{ display: 'inline-flex' }}
      >
        <Icon size={20} strokeWidth={1.75} />
      </motion.span>

      {/* Dwell ring — remounts on each cycle so it restarts cleanly. */}
      <svg
        aria-hidden
        viewBox="0 0 56 56"
        style={{
          position: 'absolute',
          inset: -1,
          width: 58,
          height: 58,
          transform: 'rotate(-90deg)',
          pointerEvents: 'none',
        }}
      >
        <motion.circle
          key={cycle}
          cx="28"
          cy="28"
          r="27"
          fill="none"
          stroke={hue}
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
          transition={
            hovered
              ? { pathLength: { duration: DWELL_SECONDS, ease: 'linear' }, opacity: { duration: 0.2 } }
              : { pathLength: { duration: 0.25, ease: EASE }, opacity: { duration: 0.2 } }
          }
          onAnimationComplete={(def) => {
            if (typeof def === 'object' && def !== null && (def as { pathLength?: number }).pathLength === 1) {
              onAdvance()
              setCycle((c) => c + 1)
            }
          }}
        />
      </svg>
    </motion.button>
  )
}

/* ------------------------------------------------------------------ */
/* Slide variants. `custom` is the travel direction (+1 forward).      */
/* ------------------------------------------------------------------ */
const coverVariants = {
  enter: (dir: number) => ({ x: `${dir * 12}%`, opacity: 0, scale: 1.04 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (dir: number) => ({ x: `${dir * -8}%`, opacity: 0, scale: 0.98 }),
}

const metaContainer = {
  enter: {},
  center: { transition: { staggerChildren: 0.07, delayChildren: 0.08 } },
  exit: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
}

const metaItem = {
  enter: (dir: number) => ({ opacity: 0, y: 18, x: dir * 10 }),
  center: { opacity: 1, y: 0, x: 0, transition: { duration: 0.55, ease: EASE } },
  exit: (dir: number) => ({ opacity: 0, y: -10, x: dir * -8, transition: { duration: 0.25, ease: EASE } }),
}

export default function Projects() {
  const reduceMotion = useReducedMotion()
  const [[index, direction], setPage] = useState<[number, number]>([0, 1])
  const count = projects.length
  const project = projects[index]
  const hue = HUE_CYCLE[index % HUE_CYCLE.length]
  const hex = HUE_HEX[hue]
  const stageRef = useRef<HTMLDivElement>(null)

  const go = useCallback(
    (dir: number) => {
      setPage(([i]) => [(i + dir + count) % count, dir])
    },
    [count],
  )

  const jump = (to: number) => {
    if (to === index) return
    setPage([to, to > index ? 1 : -1])
  }

  // Arrow keys turn the deck while focus is inside the stage.
  useEffect(() => {
    const el = stageRef.current
    if (!el) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault()
        go(1)
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        go(-1)
      }
    }
    el.addEventListener('keydown', onKey)
    return () => el.removeEventListener('keydown', onKey)
  }, [go])

  const onDragEnd = (_: unknown, info: PanInfo) => {
    const swipe = info.offset.x + info.velocity.x * 0.2
    if (swipe < -60) go(1)
    else if (swipe > 60) go(-1)
  }

  const motionProps = (variants: typeof coverVariants | typeof metaItem) =>
    reduceMotion
      ? {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: { duration: 0.3 },
        }
      : { variants, initial: 'enter', animate: 'center', exit: 'exit' }

  return (
    <section
      id="projects"
      style={{
        position: 'relative',
        background: 'var(--ink-900)',
        padding: 'var(--section-y) var(--gutter)',
        overflow: 'hidden',
      }}
    >
      {/* Ambient wash that retints with the active project */}
      <motion.div
        aria-hidden
        animate={{
          background: `radial-gradient(60% 50% at 70% 45%, ${hex}1f 0%, transparent 70%)`,
        }}
        transition={{ duration: 1.2, ease: EASE }}
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
      />

      <div style={{ position: 'relative', maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        {/* Section header */}
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
            <Eyebrow hue={hue}>Selected work</Eyebrow>
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
            A collection of projects I&apos;ve worked on.
          </p>
        </Reveal>

        {/* Stage */}
        <Reveal y={48} scale={0.96}>
          <div
            ref={stageRef}
            tabIndex={0}
            aria-roledescription="carousel"
            aria-label="Projects"
            className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-8 lg:gap-14 items-center outline-none"
            style={{ position: 'relative' }}
          >
            {/* Ghost index behind the meta column */}
            <div
              aria-hidden
              className="hidden lg:block"
              style={{
                position: 'absolute',
                right: -8,
                top: -40,
                fontFamily: 'var(--font-display)',
                fontWeight: 500,
                fontSize: 'clamp(8rem, 18vw, 16rem)',
                lineHeight: 1,
                letterSpacing: '-0.06em',
                color: 'transparent',
                WebkitTextStroke: '1px rgba(255,255,255,0.06)',
                userSelect: 'none',
                pointerEvents: 'none',
              }}
            >
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.6, ease: EASE }}
                  style={{ display: 'block' }}
                >
                  {pad(index)}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Cover frame */}
            <motion.div
              animate={{
                borderColor: `${hex}55`,
                boxShadow: `0 40px 90px -30px ${hex}66, 0 0 0 1px ${hex}14`,
              }}
              transition={{ duration: 0.9, ease: EASE }}
              style={{
                position: 'relative',
                aspectRatio: '16 / 10',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                border: '1px solid var(--border-subtle)',
                background: 'var(--ink-950)',
                cursor: 'grab',
                touchAction: 'pan-y',
              }}
            >
              <AnimatePresence custom={direction} initial={false} mode="popLayout">
                <motion.div
                  key={index}
                  custom={direction}
                  {...motionProps(coverVariants)}
                  transition={{ duration: 0.7, ease: EASE }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.12}
                  onDragEnd={onDragEnd}
                  whileDrag={{ cursor: 'grabbing' }}
                  style={{ position: 'absolute', inset: 0 }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    draggable={false}
                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                  />
                  {/* Bottom veil so the overlay chip reads on bright screenshots */}
                  <div
                    aria-hidden
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(180deg, rgba(6,9,13,0) 55%, rgba(6,9,13,0.55) 100%)',
                      pointerEvents: 'none',
                    }}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Live chip */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="aq-glass"
                aria-label={`Open ${project.title}`}
                style={{
                  position: 'absolute',
                  left: 18,
                  bottom: 18,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '8px 14px 8px 12px',
                  borderRadius: 'var(--radius-pill)',
                  border: '1px solid var(--border-strong)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-2xs)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--text-strong)',
                  textDecoration: 'none',
                }}
              >
                <span
                  aria-hidden
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: hex,
                    boxShadow: `0 0 10px ${hex}`,
                  }}
                />
                Live
                <ArrowUpRight size={12} strokeWidth={2} />
              </a>
            </motion.div>

            {/* Meta column */}
            <div style={{ position: 'relative', minHeight: 260 }}>
              <AnimatePresence custom={direction} initial={false} mode="wait">
                <motion.div
                  key={index}
                  custom={direction}
                  variants={reduceMotion ? undefined : metaContainer}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  <motion.div
                    custom={direction}
                    {...motionProps(metaItem)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      fontFamily: 'var(--font-mono)',
                      fontSize: 'var(--text-xs)',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--text-faint)',
                    }}
                  >
                    <span style={{ color: hex }}>{pad(index)}</span>
                    <span aria-hidden style={{ width: 28, height: 1, background: 'var(--border-strong)' }} />
                    <span>{pad(count - 1)}</span>
                  </motion.div>

                  <motion.h3
                    custom={direction}
                    {...motionProps(metaItem)}
                    style={{
                      margin: '18px 0 0',
                      fontFamily: 'var(--font-display)',
                      fontSize: 'var(--display-md)',
                      fontWeight: 500,
                      letterSpacing: '-0.03em',
                      lineHeight: 1.05,
                      color: 'var(--text-strong)',
                      textWrap: 'balance',
                    }}
                  >
                    {project.title}
                  </motion.h3>

                  <motion.p
                    custom={direction}
                    {...motionProps(metaItem)}
                    style={{
                      margin: '16px 0 0',
                      maxWidth: '44ch',
                      fontFamily: 'var(--font-sans)',
                      fontSize: 'var(--text-base)',
                      lineHeight: 1.6,
                      color: 'var(--text-muted)',
                      textWrap: 'pretty',
                    }}
                  >
                    {project.description}
                  </motion.p>

                  <motion.div
                    custom={direction}
                    {...motionProps(metaItem)}
                    style={{ display: 'flex', flexWrap: 'wrap', gap: 8, margin: '22px 0 0' }}
                  >
                    {project.technologies.map((tech) => (
                      <Badge key={tech} tone="neutral" variant="soft">
                        {tech}
                      </Badge>
                    ))}
                  </motion.div>

                  <motion.div
                    custom={direction}
                    {...motionProps(metaItem)}
                    style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 20, margin: '30px 0 0' }}
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 8,
                        height: 46,
                        padding: '0 20px',
                        borderRadius: 'var(--radius-md)',
                        background: 'var(--text-strong)',
                        color: 'var(--surface-page)',
                        fontFamily: 'var(--font-sans)',
                        fontSize: 'var(--text-sm)',
                        fontWeight: 600,
                        textDecoration: 'none',
                        transition: 'transform var(--dur-fast) var(--ease-out), filter var(--dur-fast) var(--ease-out)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-1px)'
                        e.currentTarget.style.filter = 'brightness(1.06)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'none'
                        e.currentTarget.style.filter = 'none'
                      }}
                    >
                      View project
                      <ArrowUpRight size={16} strokeWidth={2} />
                    </a>
                    {project.repo && (
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
                          textDecoration: 'none',
                          transition: 'color var(--dur-fast) var(--ease-out)',
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text-strong)' }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-faint)' }}
                      >
                        <CodeXml size={14} strokeWidth={2} />
                        Source
                      </a>
                    )}
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>

        {/* Controls rail */}
        <Reveal delay={0.15}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 24,
              marginTop: 'var(--space-8)',
              paddingTop: 'var(--space-5)',
              borderTop: '1px solid var(--border-subtle)',
            }}
          >
            {/* Segmented progress: click a segment to jump. */}
            <div role="tablist" aria-label="Choose project" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              {projects.map((p, i) => {
                const active = i === index
                return (
                  <button
                    key={p.title}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    aria-label={`${pad(i)} ${p.title}`}
                    onClick={() => jump(i)}
                    style={{
                      padding: '10px 0',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    <motion.span
                      animate={{
                        width: active ? 44 : 14,
                        background: active ? hex : 'rgba(255,255,255,0.18)',
                      }}
                      whileHover={{ background: active ? hex : 'rgba(255,255,255,0.4)' }}
                      transition={{ duration: 0.45, ease: EASE }}
                      style={{ display: 'block', height: 2, borderRadius: 2 }}
                    />
                  </button>
                )
              })}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <NavButton direction={-1} hue={hex} onAdvance={() => go(-1)} />
              <NavButton direction={1} hue={hex} onAdvance={() => go(1)} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

"use client"

import { useRef, useEffect, useState, useCallback } from 'react'
import { motion, useInView } from 'framer-motion'

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "HTML / CSS",
  "Tailwind",
  "Git",
  "System Design",
  "AWS",
  "REST & GraphQL",
  "Microservices",
  "CI/CD",
  "Docker",
  "Kubernetes",
  "Testing",
  "Agile",
]

function SkillChip({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm whitespace-nowrap shrink-0">
      {name}
    </span>
  )
}

function ArrowButton({
  direction,
  onHoldStart,
  onHoldEnd,
}: {
  direction: 'left' | 'right'
  onHoldStart: () => void
  onHoldEnd: () => void
}) {
  return (
    <button
      onMouseDown={onHoldStart}
      onMouseUp={onHoldEnd}
      onMouseLeave={onHoldEnd}
      onTouchStart={onHoldStart}
      onTouchEnd={onHoldEnd}
      className="absolute top-0 bottom-0 z-10 flex items-center justify-center w-10 md:w-12 cursor-pointer select-none transition-opacity opacity-60 hover:opacity-100"
      style={{
        [direction === 'left' ? 'left' : 'right']: 0,
        backgroundImage:
          direction === 'left'
            ? 'linear-gradient(to right, rgba(10,10,10,0.95), transparent)'
            : 'linear-gradient(to left, rgba(10,10,10,0.95), transparent)',
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4 text-white/70"
      >
        {direction === 'left' ? (
          <polyline points="15 18 9 12 15 6" />
        ) : (
          <polyline points="9 6 15 12 9 18" />
        )}
      </svg>
    </button>
  )
}

const BASE_PX_PER_SECOND = 40
const FAST_MULTIPLIER = 4

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  const stripRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { amount: 0.2 })
  const offsetRef = useRef(0)
  const speedRef = useRef(1)
  const rafRef = useRef<number>(0)
  const lastTimeRef = useRef<number>(0)

  const holdLeft = useCallback(() => { speedRef.current = -FAST_MULTIPLIER }, [])
  const holdRight = useCallback(() => { speedRef.current = FAST_MULTIPLIER }, [])
  const release = useCallback(() => { speedRef.current = 1 }, [])

  useEffect(() => {
    const strip = stripRef.current
    if (!strip) return

    const tick = (now: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = now
      const dt = (now - lastTimeRef.current) / 1000
      lastTimeRef.current = now

      if (isInView) {
        offsetRef.current += BASE_PX_PER_SECOND * speedRef.current * dt

        const halfWidth = strip.scrollWidth / 2
        if (halfWidth > 0) {
          if (offsetRef.current >= halfWidth) offsetRef.current -= halfWidth
          if (offsetRef.current < 0) offsetRef.current += halfWidth
        }

        strip.style.transform = `translateX(-${offsetRef.current}px)`
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [isInView])

  const duplicated = [...skills, ...skills]

  return (
    <section id="skills" ref={sectionRef} className="relative z-10 py-24 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-10"
        >
          Skills & tools
        </motion.h2>

        <div className="relative">
          <ArrowButton direction="left" onHoldStart={holdLeft} onHoldEnd={release} />
          <ArrowButton direction="right" onHoldStart={holdRight} onHoldEnd={release} />

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] py-4">
            <div
              ref={stripRef}
              className="flex gap-4 w-max will-change-transform"
            >
              {duplicated.map((skill, i) => (
                <SkillChip key={`${skill}-${i}`} name={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

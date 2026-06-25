"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skills = [
  "JavaScript", "TypeScript", "React", "Next.js", "Node.js",
  "Python", "Express", "MongoDB", "PostgreSQL", "HTML / CSS",
  "Tailwind", "Git", "System Design", "AWS", "REST & GraphQL",
  "Microservices", "CI/CD", "Docker", "Kubernetes", "Testing", "Agile",
]

// Split into two rows for dual-direction marquee
const row1 = skills.slice(0, 11)
const row2 = skills.slice(11)

function SkillChip({ name }: { name: string }) {
  return (
    <span
      className="inline-flex items-center rounded-full glass px-5 py-2.5 text-sm font-medium text-white/70 whitespace-nowrap shrink-0 transition-all duration-300 hover:text-white hover:bg-white/[0.08] hover:shadow-[0_0_20px_rgba(99,152,255,0.1)]"
      data-magnetic
    >
      {name}
    </span>
  )
}

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const duplicated = [...items, ...items, ...items, ...items]

  return (
    <div 
      className="relative overflow-hidden group/marquee"
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
      }}
    >
      <div
        className={`flex gap-3 w-max ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} group-hover/marquee:[animation-play-state:paused]`}
        style={{ '--marquee-duration': '40s' } as React.CSSProperties}
      >
        {duplicated.map((skill, i) => (
          <SkillChip key={`${skill}-${i}`} name={skill} />
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { amount: 0.2 })

  return (
    <section id="skills" ref={sectionRef} className="relative z-10 py-28 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-white/30 mb-3">What I work with</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-display tracking-tight">
            Skills & Tools
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="space-y-4"
        >
          <MarqueeRow items={row1} />
          <MarqueeRow items={row2} reverse />
        </motion.div>
      </div>
    </section>
  )
}

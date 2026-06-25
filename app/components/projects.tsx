"use client"

import { useRef, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

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

interface TiltState {
  rotateX: number
  rotateY: number
  scale: number
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState<TiltState>({ rotateX: 0, rotateY: 0, scale: 1 })
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 })

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    const rotateX = (y - 0.5) * -12
    const rotateY = (x - 0.5) * 12
    setTilt({ rotateX, rotateY, scale: 1.02 })
    setGlowPos({ x: x * 100, y: y * 100 })
  }, [])

  const handleMouseLeave = useCallback(() => {
    setTilt({ rotateX: 0, rotateY: 0, scale: 1 })
  }, [])

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        delay: index * 0.15,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        data-magnetic
        className="group relative rounded-2xl overflow-hidden transition-shadow duration-500"
        style={{
          transform: `perspective(800px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale(${tilt.scale})`,
          transition: 'transform 0.15s ease-out',
        }}
      >
        {/* Animated gradient border glow */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
          style={{
            background: `radial-gradient(600px circle at ${glowPos.x}% ${glowPos.y}%, rgba(99, 152, 255, 0.12), transparent 40%)`,
          }}
        />

        {/* Border */}
        <div className="absolute inset-0 rounded-2xl border border-white/[0.06] group-hover:border-white/[0.12] transition-colors duration-500 z-10 pointer-events-none" />

        {/* Card content */}
        <div className="relative bg-white/[0.02] backdrop-blur-sm">
          {/* Image */}
          <div className="relative w-full aspect-video overflow-hidden bg-white/[0.03]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Image overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent opacity-60" />
          </div>

          {/* Text */}
          <div className="p-6">
            <h3 className="text-lg font-semibold text-white mb-2 font-display tracking-tight group-hover:text-gradient transition-all duration-300">
              {project.title}
            </h3>
            <p className="text-sm text-white/50 mb-4 leading-relaxed">
              {project.description}
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 mb-5">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-[11px] font-medium text-white/60 tracking-wide"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex items-center gap-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                data-magnetic
                className="group/link inline-flex items-center gap-1.5 text-xs font-medium text-white/70 hover:text-white transition-colors"
              >
                View project
                <svg className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                data-magnetic
                className="inline-flex items-center gap-1.5 text-xs font-medium text-white/40 hover:text-white/70 transition-colors"
              >
                Source
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 min-h-screen py-28 px-4 md:px-6 lg:px-8 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-white/30 mb-3">Selected work</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-display tracking-tight">
            Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

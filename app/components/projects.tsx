"use client"

import { useRef, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    title: "Core Demo Application",
    description: "LaunchDarkly capabilities demo.",
    technologies: ["Next.js", "LaunchDarkly", "AWS"],
    repo: "https://github.com/launchdarkly-labs/ld-core-demo",
    link: "https://aqadri.launchdarklydemos.com/",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-12%20at%202.05.02%E2%80%AFPM-lUXiV3L4eeaiblRxJSMqyc2GbboBsi.png"
  },
  {
    title: "Retail Demo App",
    description: "Retail web app with feature flags.",
    technologies: ["Next.js", "LaunchDarkly"],
    repo: "https://github.com/ahmedhqadri/retail-demo-app",
    link: "https://github.com/ahmedhqadri/retail-demo-app",
    image: "/retail-demo-app.png"
  },
  {
    title: "Insurance AI Chatbot",
    description: "AI chatbot for insurance customer queries.",
    technologies: ["Next.js", "LaunchDarkly"],
    repo: "https://github.com/ahmedhqadri/InsuranceBot",
    link: "https://github.com/ahmedhqadri/InsuranceBot",
    image: "/insurance-chatbot-app.png"
  },
]

export default function Projects() {
  const controls = useAnimation()
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible')
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [controls])

  return (
    <section id="projects" ref={ref} className="relative z-10 min-h-screen py-24 px-4 md:px-6 lg:px-8 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-4 text-center text-white"
        >
          Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-white/60 text-sm md:text-base mb-12"
        >
          Selected work
        </motion.p>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.article
              key={index}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 }
              }}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm overflow-hidden shadow-xl shadow-black/20 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]"
            >
              <div className="relative w-full aspect-video overflow-hidden bg-white/5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  onClick={() => window.open(project.link, '_blank')}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-white/70 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="inline-block rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-white/90 hover:text-white transition-colors"
                >
                  View repo →
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

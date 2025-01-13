"use client"

import { useRef, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    title: "Core Demo Application",
    description: "A demonstration project showcasing LaunchDarkly's capabilities.",
    technologies: ["NextJS", "LaunchDarkly", "AWS"],
    repo: "https://github.com/launchdarkly-labs/ld-core-demo",
    link: "https://aqadri.launchdarklydemos.com/",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-12%20at%202.05.02%E2%80%AFPM-lUXiV3L4eeaiblRxJSMqyc2GbboBsi.png"
  },
  {
    title: "Retail Demo App",
    description: "Retail web app with Feature Flag functionality",
    technologies: ["NextJS", "LaunchDarkly"],
    repo: "https://github.com/ahmedhqadri/retail-demo-app",
    link: "https://github.com/ahmedhqadri/retail-demo-app",
    image: "/retail-demo-app.png"
  }
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
    <section id="projects" ref={ref} className="min-h-screen py-20 px-4 md:px-6 lg:px-8 flex items-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center text-white">My Projects</h2>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
          className="grid grid-cols-1 gap-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-white shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <div className="mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="inline-block shadow-md bg-white/20 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-xl mb-6">
                <div className="absolute inset-0 bg-gray-800 rounded-t-lg"></div>
                <div className="absolute inset-x-4 top-4 bottom-8 bg-gray-900 rounded-lg overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="cursor-pointer transition-transform duration-300 hover:scale-105"
                    onClick={() => window.open(project.link, '_blank')}
                  />
                </div>
              </div>
              <div className="inline-block shadow-md bg-white/20 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 hover:bg-transparent/20">
                <a href={project.repo} target="_blank" rel="noopener noreferrer">Repo Link</a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}


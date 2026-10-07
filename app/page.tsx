"use client"

import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Header from './components/header'
import Hero from './components/hero'
import Projects from './components/projects'
import Skills from './components/skills'
import Footer from './components/footer'
import { useParallax } from './components/ds/motion'

export default function Home() {
  const [activeSection, setActiveSection] = useState('top')

  // Parallax is the signature: [data-depth] layers translate on scroll.
  // Sections assemble and scatter with scroll (`Align` in ds/scroll-align);
  // the CSS `.aq-reveal` pattern remains for the doc pages.
  useParallax()

  // Scroll progress for the top indicator
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { root: null, rootMargin: '0px', threshold: 0.4 },
    )

    document.querySelectorAll('section').forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Scroll progress — the aqua thread */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-[100] origin-left"
        style={{
          scaleX,
          background: 'linear-gradient(90deg, var(--aqua-500), var(--indigo-500))',
        }}
      />

      <Header activeSection={activeSection} />

      <main>
        <Hero />
        <Projects />
        <Skills />
      </main>

      <Footer />
    </div>
  )
}

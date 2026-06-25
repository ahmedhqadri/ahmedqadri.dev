"use client"

import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Header from './components/header'
import Hero from './components/hero'
import Projects from './components/projects'
import Skills from './components/skills'
import Footer from './components/footer'
import CursorCanvas from './components/cursor-canvas'
import AmbientBackground from './components/ambient-background'

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero')

  // Scroll progress for top indicator
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.4,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    const sections = document.querySelectorAll('section')
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Ambient background (particles + grid) */}
      <AmbientBackground />

      {/* Canvas cursor (particles + dot) */}
      <CursorCanvas />

      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-[100] origin-left"
        style={{
          scaleX,
          background: 'linear-gradient(90deg, rgba(99, 152, 255, 0.8), rgba(155, 93, 229, 0.8))',
        }}
      />

      {/* Navigation */}
      <Header activeSection={activeSection} />

      {/* Content */}
      <main className="relative z-10">
        <Hero />
        <Projects />
        <Skills />
      </main>

      <Footer />
    </div>
  )
}

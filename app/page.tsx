"use client"

import { useEffect, useState } from 'react'
import Header from './components/header'
import Hero from './components/hero'
import Projects from './components/projects'
import Skills from './components/skills'
import Footer from './components/footer'
import DynamicCursor from './components/dynamic-cursor'
import CodeBackground from './components/code-background'

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
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
    <div className="min-h-screen bg-[#0a0a0a] text-white relative overflow-x-hidden">
      <CodeBackground />
      <DynamicCursor />
      <Header activeSection={activeSection} />
      <main className="relative z-10 pt-16">
        <Hero />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </div>
  )
}

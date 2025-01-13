"use client"

import { useEffect, useState } from 'react'
import Header from './components/header'
import Hero from './components/hero'
import Projects from './components/projects'
import Skills from './components/skills'
import Photography from './components/photography'
import Footer from './components/footer'
import DynamicCursor from './components/dynamic-cursor'

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
    <div className={`min-h-screen transition-colors duration-500 ease-in-out ${getBackgroundColor(activeSection)}`}>
      <DynamicCursor />
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <Projects />
        <Skills />
        {/* <Photography />  */}
      </main>
      <Footer />
    </div>
  )
}

function getBackgroundColor(section: string): string {
  switch (section) {
    case 'hero':
      return 'bg-gradient-to-br from-blue-300 to-blue-500'
    case 'projects':
      return 'bg-gradient-to-br from-blue-500 to-green-500'
    case 'skills':
      return 'bg-gradient-to-br from-green-500 to-yellow-500'
    case 'photography':
      return 'bg-gradient-to-br from-yellow-500 to-red-500'
    default:
      return 'bg-background'
  }
}


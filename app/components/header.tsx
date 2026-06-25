"use client"

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from "next/image"

interface HeaderProps {
  activeSection: string
}

const NAV_ITEMS = ['projects', 'skills'] as const

export default function Header({ activeSection }: HeaderProps) {
  const [mounted, setMounted] = useState(false)
  const [visible, setVisible] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Directional scroll — hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      if (currentY < 100) {
        setVisible(true)
      } else if (currentY > lastScrollY.current + 5) {
        setVisible(false)
      } else if (currentY < lastScrollY.current - 5) {
        setVisible(true)
      }
      lastScrollY.current = currentY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-4 inset-x-0 z-50 flex justify-center pointer-events-none"
        >
          <nav
            className="pointer-events-auto flex items-center gap-1 px-2 py-1.5 rounded-full glass-strong shadow-lg shadow-black/30"
            data-magnetic
          >
            {/* Avatar / Home */}
            <button
              onClick={() => scrollTo('hero')}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-300 hover:bg-white/[0.08] group"
              data-magnetic
            >
              <div className="relative w-7 h-7 overflow-hidden rounded-full ring-1 ring-white/20 transition-all group-hover:ring-white/40 group-hover:shadow-[0_0_10px_rgba(99,152,255,0.3)]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1688941303542-oAaKLRq68e0AFoRmz9sZKaKC2l4Atb.jpeg"
                  alt="Ahmed Qadri"
                  fill
                  className="object-cover"
                  sizes="28px"
                  priority
                />
              </div>
              {mounted && (
                <span className="hidden sm:inline text-xs font-medium text-white/80 group-hover:text-white transition-colors">
                  Ahmed
                </span>
              )}
            </button>

            {/* Divider */}
            <div className="w-px h-4 bg-white/10" />

            {/* Nav items with animated indicator */}
            <div className="flex items-center gap-0.5 relative">
              {NAV_ITEMS.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollTo(section)}
                  className="relative px-4 py-1.5 text-xs font-medium transition-colors duration-200 rounded-full"
                  data-magnetic
                >
                  {/* Animated background pill */}
                  {activeSection === section && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute inset-0 bg-white/10 rounded-full"
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className={`relative z-10 transition-colors ${
                    activeSection === section
                      ? 'text-white'
                      : 'text-white/50 hover:text-white/80'
                  }`}>
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </span>
                </button>
              ))}
            </div>
          </nav>
        </motion.header>
      )}
    </AnimatePresence>
  )
}

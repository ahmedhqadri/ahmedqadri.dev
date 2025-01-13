"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface HeaderProps {
  activeSection: string
}

export default function Header({ activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 py-4 px-4 md:px-6 lg:px-8 transition-all duration-300 ${
      isScrolled ? ' backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#hero" onClick={() => scrollTo('hero')} className="flex items-center gap-2">
          <div className="relative w-10 h-10 overflow-hidden rounded-full border-2 border-white/50">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1688941303542-oAaKLRq68e0AFoRmz9sZKaKC2l4Atb.jpeg"
              alt="Ahmed Qadri"
              fill
              className="object-cover"
              sizes="40px"
              priority
            />
          </div>
        </a>
        <nav>
          <ul className="flex space-x-2">
            {['projects', 'skills'].map((section) => (
              <li key={section}>
                <Button
                  variant={activeSection === section ? "secondary" : "ghost"}
                  onClick={() => scrollTo(section)}
                  className="text-white hover:text-white hover:bg-white/20 bg-transparent"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}


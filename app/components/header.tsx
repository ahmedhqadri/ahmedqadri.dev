"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import Image from "next/image"
interface HeaderProps {
  activeSection: string
}

const NAV_ITEMS = ['hero', 'projects', 'skills'] as const

export default function Header({ activeSection }: HeaderProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-black/60 backdrop-blur-xl supports-[backdrop-filter]:bg-black/40">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 md:px-6 lg:px-8">
        <a href="#hero" onClick={(e) => { e.preventDefault(); scrollTo('hero') }} className="flex items-center gap-2 group">
          <div className="relative w-9 h-9 overflow-hidden rounded-full border border-white/20 ring-2 ring-white/5 transition-all group-hover:ring-white/20 group-hover:border-white/40">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1688941303542-oAaKLRq68e0AFoRmz9sZKaKC2l4Atb.jpeg"
              alt="Ahmed Qadri"
              fill
              className="object-cover"
              sizes="36px"
              priority
            />
          </div>
          {mounted && (
            <span className="hidden sm:inline text-sm font-medium text-white/90 group-hover:text-white transition-colors">
              Ahmed
            </span>
          )}
        </a>
        <nav>
          <ul className="flex items-center gap-1">
            {NAV_ITEMS.filter((s) => s !== 'hero').map((section) => (
              <li key={section}>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollTo(section)}
                  className={`text-sm font-medium transition-colors rounded-md ${
                    activeSection === section
                      ? 'text-white bg-white/10 hover:bg-white/15'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
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

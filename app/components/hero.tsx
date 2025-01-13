"use client"

import { useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { motion, useAnimation } from 'framer-motion'

export default function Hero() {
  const controls = useAnimation()
  const ref = useRef(null)

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 })
  }, [controls])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center py-20 px-4 md:px-6 lg:px-8 text-center text-white">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          Hi, I'm <span className="text-yellow-300">Ahmed</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          I'm a full-stack developer dedicated to building innovative, scalable, and user-focused applications that deliver impactful digital experiences.
        </p>
        <div className="flex flex-col items-center gap-4">
  <Button size="lg" className="bg-blue-600 text-white hover:bg-white hover:text-blue-600 transition-colors" variant="secondary" asChild>
    <a href="https://www.linkedin.com/in/ahmedhqadri/" target="_blank" rel="noopener noreferrer">Connect via LinkedIn</a>
  </Button>
  <Button 
    size="lg" 
    className="bg-black text-white hover:bg-white hover:text-black transition-colors" 
    asChild
  >
    <a href="https://github.com/ahmedhqadri" target="_blank" rel="noopener noreferrer">Github Profile</a>
  </Button>
</div>
      </motion.div>
    </section>
  )
}


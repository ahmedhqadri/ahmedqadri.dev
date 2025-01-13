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
            <a href="https://www.linkedin.com/in/ahmedhqadri/" target="_blank" rel="noopener noreferrer" className="flex items-center shadow-xl">
              Connect via LinkedIn
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.58c-1.14 0-2.06-.92-2.06-2.06s.92-2.06 2.06-2.06 2.06.92 2.06 2.06-.92 2.06-2.06 2.06zM20.45 20.45h-3.56v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.97v5.69h-3.56V9h3.42v1.56h.05c.48-.9 1.66-1.85 3.42-1.85 3.66 0 4.34 2.41 4.34 5.54v6.2z" />
              </svg>
            </a>
          </Button>
          <Button
            size="lg"
            className="bg-black text-white hover:bg-white hover:text-black transition-colors"
            asChild
          >
            <a href="https://github.com/ahmedhqadri" target="_blank" rel="noopener noreferrer" className="flex items-center shadow-xl">
              Github Profile
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.17c-3.338.726-4.033-1.61-4.033-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.746.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.997.108-.775.42-1.305.763-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.467-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.007-.322 3.3 1.23a11.52 11.52 0 013.003-.403c1.02.005 2.045.137 3.003.403 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.24 2.873.117 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.625-5.48 5.92.43.37.823 1.102.823 2.222v3.293c0 .32.19.694.8.576C20.565 21.797 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          </Button>
        </div>
      </motion.div>
    </section>
  )
}


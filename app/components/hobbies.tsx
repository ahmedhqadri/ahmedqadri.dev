"use client"

import { useRef, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

export default function Hobbies() {
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
    <section id="hobbies" ref={ref} className="min-h-screen py-20 px-4 md:px-6 lg:px-8 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-4xl font-bold mb-10 text-center text-white">Hobbies</h2>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
          }}
          className="bg-white/10 backdrop-blur-md rounded-lg overflow-hidden shadow-2xl"
        >
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-white mb-4">Photography</h3>
            <p className="text-white mb-4">Some of my favorite moments captured. Explore more on VSCO.</p>
          </div>
          <div className="relative w-full aspect-video">
            <iframe
              src="https://vsco.co/aqlens"
              className="w-full h-full border-0 rounded-b-lg"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

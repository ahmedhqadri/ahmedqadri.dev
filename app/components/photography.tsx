"use client"

import { useRef, useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'

// This array should be populated with the actual image paths from your images folder
const images = [
  '/images/photo1.jpg',
  '/images/photo2.jpg',
  '/images/photo3.jpg',
  // Add more image paths as needed
]

export default function Photography() {
  const controls = useAnimation()
  const ref = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="photography" ref={ref} className="min-h-screen py-20 px-4 md:px-6 lg:px-8 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-4xl font-bold mb-10 text-center text-white">Photography</h2>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.5 } }
          }}
          className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentIndex ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={image}
                alt={`Photography ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}


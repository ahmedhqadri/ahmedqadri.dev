"use client"

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const NAME = "Ahmed"
const TAGLINE = "Full-stack developer building scalable, user-focused applications."

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1]

const letterVariants = {
  hidden: { opacity: 0, y: 80, rotateX: -40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: 0.3 + i * 0.08,
      duration: 0.8,
      ease: EASE_OUT,
    },
  }),
}

const buttonVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 1.0 + i * 0.12,
      duration: 0.6,
      ease: EASE_OUT,
    },
  }),
}

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ahmedhqadri/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.58c-1.14 0-2.06-.92-2.06-2.06s.92-2.06 2.06-2.06 2.06.92 2.06 2.06-.92 2.06-2.06 2.06zM20.45 20.45h-3.56v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.97v5.69h-3.56V9h3.42v1.56h.05c.48-.9 1.66-1.85 3.42-1.85 3.66 0 4.34 2.41 4.34 5.54v6.2z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/ahmedhqadri',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.17c-3.338.726-4.033-1.61-4.033-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.746.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.997.108-.775.42-1.305.763-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.467-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.007-.322 3.3 1.23a11.52 11.52 0 013.003-.403c1.02.005 2.045.137 3.003.403 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.24 2.873.117 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.625-5.48 5.92.43.37.823 1.102.823 2.222v3.293c0 .32.19.694.8.576C20.565 21.797 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'Photography',
    href: 'https://vsco.co/aqlens',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <line x1="12" y1="2" x2="12" y2="6" />
        <line x1="12" y1="18" x2="12" y2="22" />
        <line x1="2" y1="12" x2="6" y2="12" />
        <line x1="18" y1="12" x2="22" y2="12" />
      </svg>
    ),
  },
]

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  // Parallax: content moves up faster than the section
  const y = useTransform(scrollYProgress, [0, 1], [0, -120])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative z-10 min-h-screen flex items-center justify-center py-24 px-4 md:px-6 lg:px-8 text-center overflow-hidden"
    >
      <motion.div
        style={{ y, opacity }}
        className="max-w-4xl mx-auto"
      >
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-sm md:text-base text-white/40 mb-4 font-medium tracking-[0.2em] uppercase"
        >
          Hi, I&apos;m
        </motion.p>

        {/* Name — character-by-character staggered reveal with gradient */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight mb-6 font-display"
            style={{ perspective: '500px' }}
        >
          {NAME.split('').map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              className="inline-block text-gradient"
            >
              {char}
            </motion.span>
          ))}
        </h1>

        {/* Tagline — blur-to-sharp fade-in */}
        <motion.p
          initial={{ opacity: 0, y: 20, filter: 'blur(12px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ delay: 0.9, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-base md:text-lg lg:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          {TAGLINE}
        </motion.p>

        {/* CTA Buttons — glassmorphic with stagger */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          {socialLinks.map((link, i) => (
            <motion.a
              key={link.label}
              custom={i}
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              data-magnetic
              className="group relative flex items-center gap-2.5 px-6 py-3 rounded-full glass text-sm font-medium text-white/80 transition-all duration-300 hover:text-white hover:bg-white/[0.08] hover:shadow-[0_0_30px_rgba(99,152,255,0.15)] hover:border-white/20"
            >
              <span className="transition-transform duration-300 group-hover:scale-110">
                {link.icon}
              </span>
              {link.label}
              {/* Hover gradient underline */}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent transition-all duration-300 group-hover:w-3/4" />
            </motion.a>
          ))}
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase text-white/25">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

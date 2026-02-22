"use client"

import { Button } from "@/components/ui/button"
import { motion } from 'framer-motion'

const LINE1 = "Hi, I'm"
const NAME = "Ahmed"
const LINE2 = "Full-stack developer building scalable, user-focused applications."

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.2 },
  }),
}

const letter = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function Hero() {
  return (
    <section id="hero" className="relative z-10 min-h-screen flex items-center justify-center py-24 px-4 md:px-6 lg:px-8 text-center">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <motion.p
            variants={container}
            className="text-lg md:text-xl text-white/70 mb-2 font-medium tracking-wide uppercase"
          >
            {LINE1.split('').map((char, i) => (
              <motion.span key={i} variants={letter}>
                {char}
              </motion.span>
            ))}
          </motion.p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-6">
            {NAME.split('').map((char, i) => (
              <motion.span
                key={i}
                variants={letter}
                className="inline-block text-white"
                style={{ textShadow: '0 0 40px rgba(255,255,255,0.15)' }}
              >
                {char}
              </motion.span>
            ))}
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-lg md:text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            {LINE2}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="w-full sm:w-auto rounded-full border-2 border-white/30 bg-white/5 text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 font-medium px-8 shadow-lg shadow-black/20"
            asChild
          >
            <a href="https://www.linkedin.com/in/ahmedhqadri/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.58c-1.14 0-2.06-.92-2.06-2.06s.92-2.06 2.06-2.06 2.06.92 2.06 2.06-.92 2.06-2.06 2.06zM20.45 20.45h-3.56v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.97v5.69h-3.56V9h3.42v1.56h.05c.48-.9 1.66-1.85 3.42-1.85 3.66 0 4.34 2.41 4.34 5.54v6.2z" />
              </svg>
              LinkedIn
            </a>
          </Button>
          <Button
            size="lg"
            className="w-full sm:w-auto rounded-full border-2 border-white/30 bg-white/5 text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 font-medium px-8 shadow-lg shadow-black/20"
            asChild
          >
            <a href="https://github.com/ahmedhqadri" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.17c-3.338.726-4.033-1.61-4.033-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.746.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.997.108-.775.42-1.305.763-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.467-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.007-.322 3.3 1.23a11.52 11.52 0 013.003-.403c1.02.005 2.045.137 3.003.403 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.24 2.873.117 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.625-5.48 5.92.43.37.823 1.102.823 2.222v3.293c0 .32.19.694.8.576C20.565 21.797 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
          </Button>
          <Button
            size="lg"
            className="w-full sm:w-auto rounded-full border-2 border-white/30 bg-white/5 text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 font-medium px-8 shadow-lg shadow-black/20"
            asChild
          >
            <a href="https://vsco.co/aqlens" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <line x1="12" y1="2" x2="12" y2="6" />
                <line x1="12" y1="18" x2="12" y2="22" />
                <line x1="2" y1="12" x2="6" y2="12" />
                <line x1="18" y1="12" x2="22" y2="12" />
                <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
                <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
                <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
                <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
              </svg>
              Photography
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative z-10 py-8 px-4 md:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm text-white/50"
        >
          © {new Date().getFullYear()} Ahmed Qadri
        </motion.p>
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/ahmedhqadri/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-white transition-colors text-sm"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/ahmedhqadri"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-white transition-colors text-sm"
          >
            GitHub
          </a>
          <a
            href="https://vsco.co/aqlens"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-white transition-colors text-sm"
          >
            Photography
          </a>
        </div>
      </div>
    </footer>
  )
}

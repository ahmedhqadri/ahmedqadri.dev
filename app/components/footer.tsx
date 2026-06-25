"use client"

import { motion } from 'framer-motion'

const footerLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ahmedhqadri/' },
  { label: 'GitHub', href: 'https://github.com/ahmedhqadri' },
  { label: 'Photography', href: 'https://vsco.co/aqlens' },
]

export default function Footer() {
  return (
    <footer className="relative z-10 py-10 px-4 md:px-6 lg:px-8">
      {/* Animated gradient divider */}
      <div className="max-w-7xl mx-auto mb-8">
        <div
          className="h-px w-full animate-gradient-shift"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(99, 152, 255, 0.3), rgba(155, 93, 229, 0.3), rgba(99, 152, 255, 0.3), transparent)',
            backgroundSize: '200% 100%',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs text-white/30 tracking-wide"
        >
          © {new Date().getFullYear()} Ahmed Qadri
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="flex items-center gap-6"
        >
          {footerLinks.map((link, i) => (
            <motion.a
              key={link.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.08, duration: 0.5 }}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              data-magnetic
              className="text-xs text-white/30 hover:text-white/70 transition-colors duration-300"
            >
              {link.label}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </footer>
  )
}

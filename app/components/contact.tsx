"use client"

import { useState, useRef, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log('Form submitted:', { name, email, message })
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    })
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <section id="contact" ref={ref} className="min-h-screen py-20 px-4 md:px-6 lg:px-8 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-4xl font-bold mb-10 text-center text-white">Get in Touch</h2>
        <motion.form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto space-y-4"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
          }}
        >
          <Input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="bg-white/10 border-white/20 text-white placeholder-white/50"
          />
          <Input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-white/10 border-white/20 text-white placeholder-white/50"
          />
          <Textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="bg-white/10 border-white/20 text-white placeholder-white/50"
          />
          <Button type="submit" className="w-full bg-white text-black hover:bg-white/90">Send Message</Button>
        </motion.form>
      </div>
    </section>
  )
}


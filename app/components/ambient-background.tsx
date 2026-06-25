"use client"

import { useEffect, useRef } from 'react'

interface AmbientParticle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  hue: number
  pulseOffset: number
  wanderAngle: number
}

const PARTICLE_COUNT = 50

export default function AmbientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef = useRef<number>(0)
  const particlesRef = useRef<AmbientParticle[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.scale(dpr, dpr)
    }
    resize()

    // Initialize particles
    const w = window.innerWidth
    const h = window.innerHeight
    const particles: AmbientParticle[] = []
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const angle = Math.random() * Math.PI * 2
      const speed = Math.random() * 2 // Initial random burst
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: 1 + Math.random() * 2.5,
        opacity: 0.08 + Math.random() * 0.18,
        hue: 210 + Math.random() * 70, // blue-violet
        pulseOffset: Math.random() * Math.PI * 2,
        wanderAngle: angle,
      })
    }
    particlesRef.current = particles

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
      }
    }
    window.addEventListener('mousemove', onMouseMove, { passive: true })
    window.addEventListener('touchmove', onTouchMove, { passive: true })
    window.addEventListener('resize', resize)

    let time = 0
    const tick = () => {
      time += 0.01
      const cw = window.innerWidth
      const ch = window.innerHeight
      ctx.clearRect(0, 0, cw, ch)

      // Draw radial vignette
      const vignette = ctx.createRadialGradient(cw / 2, ch / 2, cw * 0.2, cw / 2, ch / 2, cw * 0.8)
      vignette.addColorStop(0, 'rgba(0, 0, 0, 0)')
      vignette.addColorStop(1, 'rgba(0, 0, 0, 0.4)')
      ctx.fillStyle = vignette
      ctx.fillRect(0, 0, cw, ch)

      // Update & draw ambient particles
      for (const p of particlesRef.current) {
        // Base drift
        p.x += p.vx
        p.y += p.vy

        // Wrap around edges
        if (p.x < -20) p.x = cw + 20
        if (p.x > cw + 20) p.x = -20
        if (p.y < -20) p.y = ch + 20
        if (p.y > ch + 20) p.y = -20

        // Pulse opacity
        const pulse = Math.sin(time * 2 + p.pulseOffset) * 0.5 + 0.5
        const alpha = p.opacity * (0.6 + pulse * 0.4)

        // Mouse proximity — particles gently push away
        const dx = p.x - mouseRef.current.x
        const dy = p.y - mouseRef.current.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 150 && dist > 0) {
          const force = (150 - dist) / 150 * 0.5 // Stronger push from mouse
          p.vx += (dx / dist) * force
          p.vy += (dy / dist) * force
        }

        // Random wandering steering (truly random independent directions)
        p.wanderAngle += (Math.random() - 0.5) * 0.4
        p.vx += Math.cos(p.wanderAngle) * 0.015
        p.vy += Math.sin(p.wanderAngle) * 0.015

        // Friction / Momentum decay
        p.vx *= 0.95
        p.vy *= 0.95

        // Draw
        ctx.save()
        ctx.globalAlpha = alpha
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${p.hue}, 60%, 70%, 1)`
        ctx.shadowColor = `hsla(${p.hue}, 60%, 70%, 0.5)`
        ctx.shadowBlur = 6
        ctx.fill()
        ctx.restore()
      }

      // Draw connection lines between nearby particles AND mouse
      ctx.save()
      const mx = mouseRef.current.x
      const my = mouseRef.current.y

      for (let i = 0; i < particlesRef.current.length; i++) {
        const a = particlesRef.current[i]

        // Connect to mouse/touch point
        if (mx !== 0 && my !== 0) {
          const mdx = a.x - mx
          const mdy = a.y - my
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy)
          if (mDist < 150) {
            const alpha = (1 - mDist / 150) * 0.15
            ctx.globalAlpha = alpha
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(mx, my)
            ctx.strokeStyle = 'rgba(155, 93, 229, 1)' // Violet connection to pointer
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }

        // Connect to other particles
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const b = particlesRef.current[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.06
            ctx.globalAlpha = alpha
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = 'rgba(99, 152, 255, 1)'
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
      ctx.restore()

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('touchmove', onTouchMove)
    }
  }, [])

  // Grid parallax from mouse
  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return

    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 8
      const y = (e.clientY / window.innerHeight - 0.5) * 8
      grid.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg)`
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Perspective grid */}
      <div
        ref={gridRef}
        className="absolute inset-0 transition-transform duration-500 ease-out"
        style={{ transform: 'perspective(1000px) rotateY(0deg) rotateX(0deg)' }}
      >
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(99, 152, 255, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99, 152, 255, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Ambient particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
      />

      {/* Subtle top-left radial glow */}
      <div
        className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full opacity-[0.04]"
        style={{
          background: 'radial-gradient(circle, rgba(99, 152, 255, 0.6) 0%, transparent 70%)',
        }}
      />

      {/* Subtle bottom-right radial glow */}
      <div
        className="absolute -bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full opacity-[0.03]"
        style={{
          background: 'radial-gradient(circle, rgba(155, 93, 229, 0.5) 0%, transparent 70%)',
        }}
      />
    </div>
  )
}

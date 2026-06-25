"use client"

import { useEffect, useRef, useCallback } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  maxLife: number
  size: number
  hue: number
}

const MAX_PARTICLES = 80
const TRAIL_RATE = 3 // particles per frame when moving
const BURST_COUNT = 16
const FRICTION = 0.96
const PARTICLE_LIFE = 60 // frames

export default function CursorCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -100, y: -100 })
  const prevMouseRef = useRef({ x: -100, y: -100 })
  const particlesRef = useRef<Particle[]>([])
  const rafRef = useRef<number>(0)
  const dotRef = useRef({ x: -100, y: -100, scale: 1, targetScale: 1 })
  const isTouchRef = useRef(false)
  const magnetTargetRef = useRef<{ x: number; y: number; w: number; h: number } | null>(null)

  const spawnParticle = useCallback((x: number, y: number, vx: number, vy: number, life?: number) => {
    if (particlesRef.current.length >= MAX_PARTICLES) {
      particlesRef.current.shift()
    }
    const hue = 220 + Math.random() * 60 // blue to violet range
    particlesRef.current.push({
      x,
      y,
      vx: vx + (Math.random() - 0.5) * 0.8,
      vy: vy + (Math.random() - 0.5) * 0.8,
      life: life ?? PARTICLE_LIFE,
      maxLife: life ?? PARTICLE_LIFE,
      size: 1.5 + Math.random() * 2,
      hue,
    })
  }, [])

  const spawnBurst = useCallback((x: number, y: number) => {
    for (let i = 0; i < BURST_COUNT; i++) {
      const angle = (Math.PI * 2 * i) / BURST_COUNT + (Math.random() - 0.5) * 0.3
      const speed = 2 + Math.random() * 3
      spawnParticle(x, y, Math.cos(angle) * speed, Math.sin(angle) * speed, 40)
    }
  }, [spawnParticle])

  useEffect(() => {
    // Detect touch device
    const checkTouch = () => { isTouchRef.current = true }
    window.addEventListener('touchstart', checkTouch, { once: true, passive: true })

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
    window.addEventListener('resize', resize)

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }

      // Check for magnetic elements
      const el = document.elementFromPoint(e.clientX, e.clientY)
      const magEl = el?.closest('[data-magnetic]') as HTMLElement | null
      if (magEl) {
        const rect = magEl.getBoundingClientRect()
        magnetTargetRef.current = { x: rect.left, y: rect.top, w: rect.width, h: rect.height }
        dotRef.current.targetScale = 2.5
      } else {
        magnetTargetRef.current = null
        dotRef.current.targetScale = 1
      }
    }

    const onClick = (e: MouseEvent) => {
      spawnBurst(e.clientX, e.clientY)
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    window.addEventListener('click', onClick)

    const tick = () => {
      if (isTouchRef.current) {
        rafRef.current = requestAnimationFrame(tick)
        return
      }

      const w = window.innerWidth
      const h = window.innerHeight
      ctx.clearRect(0, 0, w, h)

      const mx = mouseRef.current.x
      const my = mouseRef.current.y
      const px = prevMouseRef.current.x
      const py = prevMouseRef.current.y
      const dx = mx - px
      const dy = my - py
      const speed = Math.sqrt(dx * dx + dy * dy)

      // Spawn trail particles based on movement speed
      if (speed > 1) {
        const count = Math.min(Math.ceil(speed / 8), TRAIL_RATE)
        for (let i = 0; i < count; i++) {
          const t = i / count
          const ix = px + dx * t
          const iy = py + dy * t
          spawnParticle(
            ix, iy,
            dx * 0.02 + (Math.random() - 0.5) * 1,
            dy * 0.02 + (Math.random() - 0.5) * 1
          )
        }
      }

      prevMouseRef.current = { x: mx, y: my }

      // Update & render particles
      const alive: Particle[] = []
      for (const p of particlesRef.current) {
        p.x += p.vx
        p.y += p.vy
        p.vx *= FRICTION
        p.vy *= FRICTION
        p.life--

        if (p.life <= 0) continue
        alive.push(p)

        const alpha = (p.life / p.maxLife) * 0.6
        const radius = p.size * (p.life / p.maxLife)

        // Draw particle with glow
        ctx.save()
        ctx.globalAlpha = alpha
        ctx.beginPath()
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${p.hue}, 80%, 75%, 1)`
        ctx.shadowColor = `hsla(${p.hue}, 80%, 75%, 0.8)`
        ctx.shadowBlur = 8
        ctx.fill()
        ctx.restore()
      }
      particlesRef.current = alive

      // Smooth cursor dot
      const dot = dotRef.current
      const lerpFactor = 0.15
      dot.x += (mx - dot.x) * lerpFactor
      dot.y += (my - dot.y) * lerpFactor
      dot.scale += (dot.targetScale - dot.scale) * 0.1

      // Draw cursor dot (primary cursor)
      const dotSize = 4 * dot.scale
      ctx.save()
      ctx.globalAlpha = 0.9
      ctx.beginPath()
      ctx.arc(dot.x, dot.y, dotSize, 0, Math.PI * 2)
      ctx.fillStyle = '#ffffff'
      ctx.shadowColor = 'rgba(99, 152, 255, 0.6)'
      ctx.shadowBlur = 12 * dot.scale
      ctx.fill()
      ctx.restore()

      // Draw cursor ring (outer)
      ctx.save()
      ctx.globalAlpha = 0.3
      ctx.beginPath()
      ctx.arc(dot.x, dot.y, dotSize + 8, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)'
      ctx.lineWidth = 1
      ctx.stroke()
      ctx.restore()

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('click', onClick)
      window.removeEventListener('touchstart', checkTouch)
    }
  }, [spawnParticle, spawnBurst])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      style={{ mixBlendMode: 'screen' }}
    />
  )
}

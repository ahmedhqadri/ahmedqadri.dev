"use client"

import { useEffect } from 'react'

/**
 * AQ Studios — parallax engine.
 * Translates every [data-depth="0.NN"] element relative to the viewport
 * centre on scroll (rAF-throttled). Higher depth = more movement.
 * Disabled under prefers-reduced-motion.
 */
export function useParallax() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let raf: number | null = null

    const apply = () => {
      raf = null
      const vh = window.innerHeight
      document.querySelectorAll<HTMLElement>('[data-depth]').forEach((el) => {
        const depth = parseFloat(el.getAttribute('data-depth') || '0') || 0
        const r = el.getBoundingClientRect()
        const centre = r.top + r.height / 2
        const delta = (vh / 2 - centre) * depth
        el.style.transform = `translate3d(0, ${delta.toFixed(1)}px, 0)`
      })
    }

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(apply)
    }

    apply()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])
}

/**
 * AQ Studios — reveal-on-scroll.
 * Fades `.aq-reveal` elements up 24px once they cross into view.
 */
export function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.aq-reveal'))
    if (!els.length) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      els.forEach((el) => el.setAttribute('data-revealed', 'true'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-revealed', 'true')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

/**
 * Smooth-scroll to a section id, offset for the fixed glass nav.
 * `scrollIntoView` is avoided deliberately.
 *
 * The header and footer are shared with sub-routes like /support, where the
 * target section does not exist — those fall back to the home page anchor.
 */
export function scrollToSection(id: string) {
  if (id === 'top') {
    if (window.location.pathname !== '/') {
      window.location.href = '/'
      return
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
  const el = document.getElementById(id)
  if (!el) {
    window.location.href = `/#${id}`
    return
  }
  window.scrollTo({
    top: el.getBoundingClientRect().top + window.scrollY - 60,
    behavior: 'smooth',
  })
}

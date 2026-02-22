"use client"

import { useEffect, useState } from 'react'

export default function DynamicCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', updateCursorPosition)

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition)
    }
  }, [])

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[1]"
      style={{
        background: `radial-gradient(700px at ${position.x}px ${position.y}px, rgba(255,255,255,0.07), rgba(255,255,255,0.02) 40%, transparent 70%)`,
      }}
    />
  )
}

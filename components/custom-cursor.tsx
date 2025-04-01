"use client"

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
      
      // Hide cursor after 2 seconds of no movement
      clearTimeout(timeout)
      timeout = setTimeout(() => setIsVisible(false), 2000)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('.holographic-card')) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseover', handleMouseOver)
    window.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
      window.removeEventListener('mouseleave', handleMouseLeave)
      clearTimeout(timeout)
    }
  }, [])

  if (!isVisible) return null

  return (
    <motion.div
      className={`custom-cursor ${isHovering ? 'hover' : ''}`}
      animate={{
        x: position.x - 12,
        y: position.y - 12,
        scale: isHovering ? 1.2 : 1,
      }}
      transition={{
        type: "spring",
        damping: 50,
        stiffness: 400,
        mass: 0.2,
      }}
    />
  )
}
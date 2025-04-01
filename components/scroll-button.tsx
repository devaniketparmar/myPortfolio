"use client"

import { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function ScrollButton() {
  const [show, setShow] = useState(true)
  const [isAtBottom, setIsAtBottom] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight
      const clientHeight = document.documentElement.clientHeight
      
      // Show button when not at top
      setShow(scrollTop > 100)
      
      // Check if we're near the bottom
      setIsAtBottom(Math.ceil(scrollTop + clientHeight) >= scrollHeight - 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToPosition = () => {
    if (isAtBottom) {
      // Scroll to top if at bottom
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      // Scroll to next section
      window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })
    }
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className={`scroll-button ${isAtBottom ? 'up' : ''}`}
          onClick={scrollToPosition}
        >
          <ChevronDown className="h-6 w-6 text-primary" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
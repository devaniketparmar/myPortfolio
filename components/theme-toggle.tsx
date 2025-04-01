"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { Switch } from "@/components/ui/switch"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const isDark = theme === "dark"

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <motion.div 
      className="flex items-center gap-1.5 p-1.5 rounded-full bg-background/50 backdrop-blur-sm border border-primary/10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        initial={false}
        animate={{ scale: isDark ? 0.8 : 1, opacity: isDark ? 0.5 : 1 }}
        transition={{ duration: 0.2 }}
      >
        <Sun className="h-4 w-4 text-primary" />
      </motion.div>
      
      <Switch
        checked={isDark}
        onCheckedChange={toggleTheme}
        className="data-[state=checked]:bg-primary"
      />
      
      <motion.div
        initial={false}
        animate={{ scale: isDark ? 1 : 0.8, opacity: isDark ? 1 : 0.5 }}
        transition={{ duration: 0.2 }}
      >
        <Moon className="h-4 w-4 text-primary" />
      </motion.div>
    </motion.div>
  )
}
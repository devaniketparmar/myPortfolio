"use client"

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ExternalLink, Download } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Cyberpunk background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515630278258-407f66498911')] bg-cover bg-center"
        />
      </div>

      {/* Glowing circuit lines */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-primary via-transparent to-primary" />
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-primary to-transparent" />
        <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-primary via-transparent to-primary" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60">
              Building the Future,
              <br />
              One Line at a Time
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12"
          >
            Full Stack Developer | Ethical Tech Advocate
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="group">
              <span className="flex items-center gap-2">
                Hire Me
                <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            <Button size="lg" variant="outline" className="group">
              <span className="flex items-center gap-2">
                Download CV
                <Download className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </span>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Animated background particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/50 rounded-full"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              scale: 0
            }}
            animate={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              scale: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>
    </section>
  );
}
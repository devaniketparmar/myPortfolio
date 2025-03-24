"use client"

import { motion } from 'framer-motion';
import { Sprout, Code, Heart } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470115636492-6d2b56f9146d')] bg-cover bg-center"
        />
      </div>

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Vegan Developer
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Crafting sustainable digital solutions with a conscience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: <Sprout className="h-8 w-8" />,
              title: "Sustainable Code",
              description: "Building efficient, scalable solutions that respect both users and our planet"
            },
            {
              icon: <Code className="h-8 w-8" />,
              title: "Clean Architecture",
              description: "Creating maintainable code structures that grow naturally like organic systems"
            },
            {
              icon: <Heart className="h-8 w-8" />,
              title: "Ethical Development",
              description: "Prioritizing accessibility, inclusivity, and environmental consciousness"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="p-6 backdrop-blur-lg bg-background/40 border-primary/20 hover:border-primary/40 transition-colors">
                <div className="text-primary mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client"

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Briefcase, Code2, Database, MessageSquare, ShoppingCart, Server } from 'lucide-react';

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Best I Coder",
    period: "2024 - Present",
    icon: <Code2 className="h-6 w-6" />,
    achievements: [
      {
        text: "Developed React & Next.js web applications",
        icon: <Code2 className="h-5 w-5" />
      },
      {
        text: "Built Laravel & MySQL APIs",
        icon: <Database className="h-5 w-5" />
      },
      {
        text: "Integrated payment gateways & real-time chat",
        icon: <MessageSquare className="h-5 w-5" />
      }
    ]
  },
  {
    title: "PHP Developer",
    company: "Communities Heritage Private Limited",
    period: "2023 - 2024",
    icon: <Server className="h-6 w-6" />,
    achievements: [
      {
        text: "Created e-commerce solutions in PHP",
        icon: <ShoppingCart className="h-5 w-5" />
      },
      {
        text: "Implemented REST APIs & MySQL optimizations",
        icon: <Database className="h-5 w-5" />
      }
    ]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Professional Journey</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building innovative solutions and gaining valuable experience
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-8 relative"
            >
              {/* Connecting line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-[27px] top-[64px] w-0.5 h-[calc(100%-32px)] bg-gradient-to-b from-primary/50 to-transparent" />
              )}

              <Card className="p-6 backdrop-blur-lg bg-background/40 border-primary/20 hover:border-primary/40 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    {experience.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <div>
                        <h3 className="text-xl font-semibold">{experience.title}</h3>
                        <p className="text-muted-foreground">{experience.company}</p>
                      </div>
                      <span className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary">
                        {experience.period}
                      </span>
                    </div>
                    <ul className="mt-4 space-y-3">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-center gap-3">
                          <div className="text-primary">{achievement.icon}</div>
                          <span>{achievement.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
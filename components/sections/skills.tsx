"use client"

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Code2, Database, Globe, Layout, Server, Smartphone, Github as Git, Terminal } from 'lucide-react';

const skills = [
  {
    category: "Frontend",
    icon: <Layout className="h-6 w-6" />,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    category: "Backend",
    icon: <Server className="h-6 w-6" />,
    items: ["Node.js", "Express", "Python", "Java"]
  },
  {
    category: "Database",
    icon: <Database className="h-6 w-6" />,
    items: ["PostgreSQL", "MongoDB", "Redis", "Supabase"]
  },
  {
    category: "Web Technologies",
    icon: <Globe className="h-6 w-6" />,
    items: ["HTML5", "CSS3", "JavaScript", "REST APIs"]
  },
  {
    category: "Mobile Development",
    icon: <Smartphone className="h-6 w-6" />,
    items: ["React Native", "Flutter", "iOS", "Android"]
  },
  {
    category: "Development Tools",
    icon: <Terminal className="h-6 w-6" />,
    items: ["Git", "Docker", "AWS", "Linux"]
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Technical Skills</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cultivating sustainable development practices through modern technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 backdrop-blur-lg bg-background/40 border-primary/20 hover:border-primary/40 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-primary">{skill.icon}</div>
                  <h3 className="text-xl font-semibold">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, itemIndex) => (
                    <span
                      key={itemIndex}
                      className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
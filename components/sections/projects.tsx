"use client"

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: "EcoTracker",
    description: "A carbon footprint tracking application helping users minimize their environmental impact",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#"
  },
  {
    title: "VeganRecipes API",
    description: "RESTful API serving plant-based recipes and nutritional information",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
    tags: ["Express", "PostgreSQL", "Docker"],
    link: "#"
  },
  {
    title: "GreenCommerce",
    description: "Sustainable e-commerce platform for eco-friendly products",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc",
    tags: ["Next.js", "Stripe", "Tailwind"],
    link: "#"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sustainable solutions making a positive impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full group">
                    <span className="flex items-center gap-2">
                      View Project
                      <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
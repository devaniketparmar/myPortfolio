"use client"

import { motion } from 'framer-motion';
import { 
  siReact,
  siNextdotjs,
  siTypescript,
  siTailwindcss,
  siNodedotjs,
  siExpress,
  siPython,
  siOpenjdk,
  siPostgresql,
  siMongodb,
  siRedis,
  siGraphql,
  siGit,
  siDocker,
  siAmazonaws,
  siLinux,
  siJenkins,
  siKubernetes,
  siVisualstudiocode
} from 'simple-icons';

const skills = [
  {
    name: "React",
    icon: siReact,
    category: "Frontend",
    color: "#61DAFB"
  },
  {
    name: "Next.js",
    icon: siNextdotjs,
    category: "Frontend",
    color: "#000000"
  },
  {
    name: "TypeScript",
    icon: siTypescript,
    category: "Frontend",
    color: "#3178C6"
  },
  {
    name: "Tailwind CSS",
    icon: siTailwindcss,
    category: "Frontend",
    color: "#06B6D4"
  },
  {
    name: "Node.js",
    icon: siNodedotjs,
    category: "Backend",
    color: "#339933"
  },
  {
    name: "Express",
    icon: siExpress,
    category: "Backend",
    color: "#000000"
  },
  {
    name: "Python",
    icon: siPython,
    category: "Backend",
    color: "#3776AB"
  },
  {
    name: "Java",
    icon: siOpenjdk,
    category: "Backend",
    color: "#007396"
  },
  {
    name: "PostgreSQL",
    icon: siPostgresql,
    category: "Database",
    color: "#4169E1"
  },
  {
    name: "MongoDB",
    icon: siMongodb,
    category: "Database",
    color: "#47A248"
  },
  {
    name: "Redis",
    icon: siRedis,
    category: "Database",
    color: "#DC382D"
  },
  {
    name: "GraphQL",
    icon: siGraphql,
    category: "Web",
    color: "#E10098"
  },
  {
    name: "React Native",
    icon: siReact,
    category: "Mobile",
    color: "#61DAFB"
  },
  {
    name: "Git",
    icon: siGit,
    category: "Tools",
    color: "#F05032"
  },
  {
    name: "Docker",
    icon: siDocker,
    category: "DevOps",
    color: "#2496ED"
  },
  {
    name: "AWS",
    icon: siAmazonaws,
    category: "Cloud",
    color: "#232F3E"
  },
  {
    name: "Linux",
    icon: siLinux,
    category: "Systems",
    color: "#FCC624"
  },
  {
    name: "Jenkins",
    icon: siJenkins,
    category: "DevOps",
    color: "#D24939"
  },
  {
    name: "Kubernetes",
    icon: siKubernetes,
    category: "DevOps",
    color: "#326CE5"
  },
  {
    name: "VS Code",
    icon: siVisualstudiocode,
    category: "Tools",
    color: "#007ACC"
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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="flex flex-col items-center justify-center p-6 rounded-xl bg-background/40 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                <div 
                  className="transition-transform duration-300 group-hover:scale-110 mb-3"
                  style={{ color: skill.color }}
                  dangerouslySetInnerHTML={{ __html: skill.icon.svg }}
                />
                <h3 className="text-sm font-medium">{skill.name}</h3>
                <span className="text-xs text-muted-foreground mt-1">{skill.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
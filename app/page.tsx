"use client"

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Leaf, Code2, Brain, Send, ChevronDown, ExternalLink, Github, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import ExperienceSection from '@/components/sections/experience';
import ProjectsSection from '@/components/sections/projects';
import SkillsSection from '@/components/sections/skills';
import ContactSection from '@/components/sections/contact';
import GitHubStats from '@/components/sections/github-stats';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'projects', 'github', 'skills', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          if (top <= window.innerHeight / 2 && bottom >= window.innerHeight / 2) {
            setActiveSection(section);
            break;
          }
        }
      }
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolling ? 'bg-background/80 backdrop-blur-lg shadow-lg' : ''
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-4"
            >
              <Leaf className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">Aniket Parmar</span>
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'hero', icon: <Leaf className="h-4 w-4" /> },
                { id: 'about', icon: <Code2 className="h-4 w-4" /> },
                { id: 'experience', icon: <Briefcase className="h-4 w-4" /> },
                { id: 'projects', icon: <Brain className="h-4 w-4" /> },
                { id: 'github', icon: <Github className="h-4 w-4" /> },
                { id: 'skills', icon: <Code2 className="h-4 w-4" /> },
                { id: 'contact', icon: <Send className="h-4 w-4" /> },
              ].map(({ id, icon }) => (
                <Button
                  key={id}
                  variant="ghost"
                  className={`capitalize ${
                    activeSection === id ? 'text-primary' : 'text-muted-foreground'
                  }`}
                  onClick={() => scrollToSection(id)}
                >
                  <span className="flex items-center gap-2">
                    {icon}
                    {id}
                  </span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <div>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <GitHubStats />
        <SkillsSection />
        <ContactSection />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={() => scrollToSection(
            activeSection === 'hero' ? 'about' :
            activeSection === 'about' ? 'experience' :
            activeSection === 'experience' ? 'projects' :
            activeSection === 'projects' ? 'github' :
            activeSection === 'github' ? 'skills' :
            activeSection === 'skills' ? 'contact' : 'hero'
          )}
        >
          <ChevronDown className="h-6 w-6" />
        </Button>
      </motion.div>
    </main>
  );
}
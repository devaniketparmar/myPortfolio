"use client"

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Code2, Brain, Send, Briefcase, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/ui/avatar';
import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import ExperienceSection from '@/components/sections/experience';
import ProjectsSection from '@/components/sections/projects';
import SkillsSection from '@/components/sections/skills';
import ContactSection from '@/components/sections/contact';
import SocialSection from '@/components/sections/social';
import { ThemeToggle } from '@/components/theme-toggle';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolling, setScrolling] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'contact'];
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
    setMobileMenuOpen(false);
  };

  const navigationItems = [
    { id: 'hero', icon: <Leaf className="h-4 w-4" />, label: 'Home' },
    { id: 'about', icon: <Code2 className="h-4 w-4" />, label: 'About' },
    { id: 'experience', icon: <Briefcase className="h-4 w-4" />, label: 'Experience' },
    { id: 'projects', icon: <Brain className="h-4 w-4" />, label: 'Projects' },
    { id: 'skills', icon: <Code2 className="h-4 w-4" />, label: 'Skills' },
    { id: 'contact', icon: <Send className="h-4 w-4" />, label: 'Contact' },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <nav className={`fixed top-0 w-full z-[60] transition-all duration-300 ${
        scrolling || mobileMenuOpen ? 'bg-background/80 backdrop-blur-lg shadow-lg' : ''
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-4"
            >
              <Avatar className="h-10 w-10 border-2 border-primary">
                <img 
                  src="https://avatars.githubusercontent.com/u/194752970?v=4" 
                  alt="Aniket Parmar"
                  className="object-cover"
                />
              </Avatar>
              <span className="text-xl font-bold">Aniket Parmar</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navigationItems.map(({ id, icon, label }) => (
                <Button
                  key={id}
                  variant="ghost"
                  size="sm"
                  className={`px-2 ${
                    activeSection === id ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                  }`}
                  onClick={() => scrollToSection(id)}
                >
                  <span className="flex items-center gap-1">
                    {icon}
                    {label}
                  </span>
                </Button>
              ))}
              <div className="ml-2">
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="flex md:hidden items-center space-x-2">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="relative"
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-primary/10 bg-background/80 backdrop-blur-lg"
            >
              <div className="px-4 py-2">
                {navigationItems.map(({ id, icon, label }) => (
                  <Button
                    key={id}
                    variant="ghost"
                    className={`w-full justify-start mb-1 ${
                      activeSection === id ? 'text-primary bg-primary/10' : 'text-muted-foreground'
                    }`}
                    onClick={() => scrollToSection(id)}
                  >
                    <span className="flex items-center gap-2">
                      {icon}
                      {label}
                    </span>
                  </Button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <div>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
        <SocialSection />
      </div>
    </main>
  );
}
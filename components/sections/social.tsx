"use client"

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SocialSection() {
  const socials = [
    {
      icon: <Github className="h-6 w-6" />,
      label: 'GitHub',
      href: 'https://github.com/devaniketparmar',
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/devaniketparmar',
    },
    {
      icon: <Twitter className="h-6 w-6" />,
      label: 'Twitter',
      href: 'https://twitter.com/devaniketparmar',
    },
    {
      icon: <Mail className="h-6 w-6" />,
      label: 'Email',
      href: 'mailto:hello@vegandev.com',
    },
  ];

  return (
    <footer className="py-12 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-8"
        >
          <div className="flex gap-4">
            {socials.map((social, index) => (
              <motion.div
                key={social.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="w-12 h-12 rounded-full hover:scale-110 transition-transform"
                  asChild
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <span className="sr-only">{social.label}</span>
                    <div className="text-primary group-hover:text-primary/80 transition-colors">
                      {social.icon}
                    </div>
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>
          <p className="text-muted-foreground text-sm">
            © 2024 Aniket Parmar. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
"use client"

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import GitHubCalendar from 'react-github-calendar';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { useTheme } from 'next-themes';

export default function GitHubStats() {
  const { theme } = useTheme();
  const username = 'devaniketparmar';

  const themes = {
    light: [
      '#ebedf0',
      '#9be9a8',
      '#40c463',
      '#30a14e',
      '#216e39'
    ],
    dark: [
      '#161b22',
      '#0e4429',
      '#006d32',
      '#26a641',
      '#39d353'
    ]
  };

  return (
    <section id="github" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">GitHub Activity</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My open source contributions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="p-6 backdrop-blur-lg bg-background/40 border-primary/20">
            <div className="flex justify-center">
              <GitHubCalendar
                username={username}
                theme={themes}
                blockSize={12}
                blockMargin={4}
                renderBlock={(block, activity) => (
                  <div
                    data-tooltip-id="github-tooltip"
                    data-tooltip-content={`${activity.count} contributions on ${activity.date}`}
                    className="transition-transform hover:scale-125"
                  >
                    {block}
                  </div>
                )}
              />
            </div>
            <ReactTooltip
              id="github-tooltip"
              className="!bg-background !text-foreground !border !border-primary/20 !shadow-lg"
            />
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
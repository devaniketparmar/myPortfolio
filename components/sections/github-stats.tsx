"use client"

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Octokit } from 'octokit';
import { GitFork, Star, GitBranch, Users, Code2, Activity } from 'lucide-react';

interface GitHubStats {
  publicRepos: number;
  followers: number;
  following: number;
  totalStars: number;
  totalForks: number;
  topLanguages: { [key: string]: number };
}

const octokit = new Octokit();

export default function GitHubStats() {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGitHubStats() {
      try {
        const username = 'devaniketparmar';
        
        // Fetch user data
        const { data: userData } = await octokit.rest.users.getByUsername({
          username,
        });

        // Fetch repositories
        const { data: repos } = await octokit.rest.repos.listForUser({
          username,
          per_page: 100,
          sort: 'updated',
        });

        // Calculate total stars and forks
        const totalStars = Array.isArray(repos) ? repos.reduce((sum, repo) => sum + (repo.stargazers_count || 0), 0) : 0;
        const totalForks = Array.isArray(repos) ? repos.reduce((sum, repo) => sum + (repo.forks_count || 0), 0) : 0;
        

        // Calculate language distribution
        const languages: { [key: string]: number } = {};
        for (const repo of repos) {
          if (repo.language) {
            languages[repo.language] = (languages[repo.language] || 0) + 1;
          }
        }

        setStats({
          publicRepos: userData.public_repos,
          followers: userData.followers,
          following: userData.following,
          totalStars,
          totalForks,
          topLanguages: languages,
        });
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchGitHubStats();
  }, []);

  if (loading) {
    return (
      <section id="github" className="min-h-screen py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-pulse text-2xl text-primary">Loading GitHub Stats...</div>
          </div>
        </div>
      </section>
    );
  }

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
            Open source contributions and coding statistics
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {[
            {
              title: "Public Repositories",
              value: stats?.publicRepos || 0,
              icon: <Code2 className="h-6 w-6" />,
            },
            {
              title: "Total Stars",
              value: stats?.totalStars || 0,
              icon: <Star className="h-6 w-6" />,
            },
            {
              title: "Total Forks",
              value: stats?.totalForks || 0,
              icon: <GitFork className="h-6 w-6" />,
            },
            {
              title: "Followers",
              value: stats?.followers || 0,
              icon: <Users className="h-6 w-6" />,
            },
            {
              title: "Following",
              value: stats?.following || 0,
              icon: <Activity className="h-6 w-6" />,
            },
            {
              title: "Active Projects",
              value: Object.keys(stats?.topLanguages || {}).length,
              icon: <GitBranch className="h-6 w-6" />,
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 backdrop-blur-lg bg-background/40 border-primary/20 hover:border-primary/40 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    {stat.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{stat.title}</h3>
                    <p className="text-3xl font-bold text-primary">{stat.value}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {stats?.topLanguages && Object.keys(stats.topLanguages).length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 backdrop-blur-lg bg-background/40 border-primary/20">
              <h3 className="text-xl font-semibold mb-4">Top Languages</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {Object.entries(stats.topLanguages)
                  .sort(([, a], [, b]) => b - a)
                  .slice(0, 8)
                  .map(([language, count], index) => (
                    <div
                      key={language}
                      className="p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors"
                    >
                      <div className="text-lg font-medium">{language}</div>
                      <div className="text-sm text-muted-foreground">
                        {count} {count === 1 ? 'repository' : 'repositories'}
                      </div>
                    </div>
                  ))}
              </div>
            </Card>
          </motion.div>
        )}
      </div>
    </section>
  );
}
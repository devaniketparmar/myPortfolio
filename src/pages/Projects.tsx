import React from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import phlinklogo from '../assets/phlinks.png';
import rawvectors from '../assets/rawvectors.svg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'RawVectors.com',
      year: '2025',
      description:
        'A full-stack platform offering free, high-quality, editable vector icons for designers and developers. Built an admin panel for managing icon uploads and user permissions, with responsive front-end interfaces.',
      techStack: ['Express.js', 'React', 'Node.js', 'MySQL', 'Tailwind CSS'],
      features: ['User Authentication', 'Icon Search & Download', 'Admin Dashboard', 'Scalable Backend'],
      liveLink: 'https://rawvectors.com',
      githubLink: '#',
      logo: rawvectors,
      logoColor: 'text-blue-600',
      bgColor: 'bg-blue-50',
      category: 'Full Stack'
    },
    {
      id: 2,
      title: 'Phlinks.com',
      year: '2024',
      description:
        'A bio links and URL shortening platform that allows users to publish and monetize their online presence with a single, concise link. Developed a responsive frontend and a robust backend with admin panel for link management.',
      techStack: ['Laravel', 'React', 'PHP', 'MySQL'],
      features: ['URL Shortening', 'Bio Link Creation', 'Ad Monetization', 'Admin Dashboard', 'Responsive Design'],
      liveLink: 'https://Phlinks.com',
      githubLink: '#',
      logo: phlinklogo,
      logoColor: 'text-green-600',
      bgColor: 'bg-green-50',
      category: 'Full Stack'
    }
  ];

  return (
    <div className="pt-20 min-h-screen">
      <section className="py-20 bg-gradient-to-br from-light-blue to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              My <span className="text-primary-blue">Projects</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Showcasing some of my recent work in full-stack development, web platforms, and modern web applications.
            </p>
          </div>

          <div className="grid lg:grid-cols-1 gap-12 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group animate-fade-in-up ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="lg:flex">
                  <div className="lg:w-1/2">
                    <div
                      className={`relative overflow-hidden h-64 lg:h-full ${project.bgColor} flex items-center justify-center group-hover:scale-105 transition-transform duration-500`}
                    >
                      <div className="text-center">
                        <img
                          src={project.logo}
                          alt={project.title}
                          className="w-24 h-24 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                        />
                        <h3 className={`text-2xl font-bold ${project.logoColor.replace('text-', 'text-')} mb-2`}>
                          {project.title}
                        </h3>
                        <div className="absolute top-4 left-4">
                          <span className="bg-primary-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                            {project.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-1/2 p-8 lg:p-12">
                    <div className="flex items-center space-x-4 mb-4">
                      <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">{project.title}</h2>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {project.year}
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6">{project.description}</p>

                    <div className="mb-6">
                      <h3 className="font-semibold text-gray-900 mb-3">Key Features:</h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-600 text-sm">
                            <div className="w-2 h-2 bg-primary-blue rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h3 className="font-semibold text-gray-900 mb-3">Tech Stack:</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-primary-blue hover:text-white transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-primary-blue text-white px-6 py-3 rounded-lg font-medium hover:bg-dark-blue transform hover:scale-105 transition-all duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;

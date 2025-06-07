import React from 'react';
import { MapPin, GraduationCap, Award, Lightbulb, Users, MessageSquare, Clock, Briefcase, Calendar } from 'lucide-react';

const About = () => {
  const skillCategories = [
    {
      title: 'Languages & Frameworks',
      skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'PHP', 'React', 'React Native', 'Node.js', 'Express.js', 'Laravel', 'WordPress', 'Shopify', 'Smarty'],
      icon: '💻'
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'MongoDB'],
      icon: '🗄️'
    },
    {
      title: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'Postman', 'Redux', 'Chakra UI', 'Tailwind CSS', 'Bootstrap'],
      icon: '🛠️'
    },
    {
      title: 'Other Technologies',
      skills: ['Data Structures & Algorithms', 'RESTful APIs', 'Admin Panel Development', 'Authentication Systems'],
      icon: '⚡'
    }
  ];

  const softSkills = [
    { name: 'Problem Solving', icon: Lightbulb },
    { name: 'Decision Making', icon: Award },
    { name: 'Effective Communication', icon: MessageSquare },
    { name: 'Multitasking', icon: Clock }
  ];

  const experience = [
    {
      title: 'Full Stack Developer',
      company: 'Best I Coders',
      location: 'Rajkot (Remote)',
      period: 'May 2024 – Present',
      achievements: [
        'Built and maintained full-stack applications using MERN stack and MySQL, focusing on scalability and security',
        'Developed an admin panel for RawVectors.com, streamlining content and user management',
        'Optimized APIs, reducing response times by 20% with efficient database queries',
        'Collaborated with teams to integrate front-end and backend, ensuring seamless user experiences'
      ]
    },
    {
      title: 'PHP Developer',
      company: 'Communities Heritage Private Limited',
      location: 'Ahmedabad (Onsite)',
      period: 'August 2023 – May 2024',
      achievements: [
        'Developed dynamic web applications using PHP, Laravel, and MySQL, implementing authentication and content management',
        'Enhanced client websites with WordPress and custom PHP, boosting user engagement by 15%',
        'Resolved complex issues in legacy code, ensuring compatibility with modern frameworks'
      ]
    }
  ];

  const education = [
    {
      degree: 'Full Stack Web Development',
      institution: 'Masal School',
      year: '2023',
      type: 'Certification'
    },
    {
      degree: 'Diploma in Information Technology',
      institution: 'Gujarat Technical University',
      year: '2021',
      type: 'Diploma'
    }
  ];

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-light-blue to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-primary-blue">Me</span>
            </h1>
            <div className="flex items-center justify-center space-x-2 text-gray-600 mb-8">
              <MapPin className="w-5 h-5 text-primary-blue" />
              <span className="text-lg">Ahmedabad, India</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 animate-fade-in-up">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">My Story</h2>
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                <p className="mb-6">
                  I'm Aniket Parmar, a passionate Full Stack Web Developer from Ahmedabad, India, with expertise in React, Node.js, Laravel, and WordPress. I thrive on solving complex problems and delivering user-friendly, scalable web solutions.
                </p>
                <p className="mb-6">
                  My experience includes leading the development of RawVectors.com, a comprehensive platform for vector icons, and collaborating on e-commerce projects like Jayhovillage. I'm dedicated to creating digital experiences that not only meet technical requirements but also provide exceptional user experiences.
                </p>
                <p>
                  When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and mentoring aspiring developers in my community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16 animate-fade-in">
              Professional Experience
            </h2>
            
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-primary-blue font-medium mb-1">{exp.company}</p>
                          <p className="text-gray-600 text-sm">{exp.location}</p>
                        </div>
                        <div className="mt-2 lg:mt-0 flex items-center text-gray-500">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span className="text-sm font-medium">{exp.period}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-primary-blue rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-600 leading-relaxed">{achievement}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16 animate-fade-in">
              Technical Skills
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {skillCategories.map((category, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">{category.icon}</span>
                    <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="bg-light-blue text-primary-blue px-3 py-1 rounded-full text-sm font-medium hover:bg-primary-blue hover:text-white transition-colors duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Soft Skills */}
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8 animate-fade-in">
              Soft Skills
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <skill.icon className="w-8 h-8 text-primary-blue mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 text-sm">{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16 animate-fade-in">
              Education
            </h2>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-1">
                            {edu.degree}
                          </h3>
                          <p className="text-gray-600 mb-2">{edu.institution}</p>
                          <span className="inline-block bg-light-blue text-primary-blue px-3 py-1 rounded-full text-sm font-medium">
                            {edu.type}
                          </span>
                        </div>
                        <div className="mt-2 md:mt-0">
                          <span className="text-lg font-semibold text-primary-blue">
                            {edu.year}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
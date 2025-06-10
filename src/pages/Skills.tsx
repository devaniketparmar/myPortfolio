import React from 'react';
import { 
  Code, 
  Database, 
  Wrench, 
  Lightbulb, 
  Award, 
  MessageSquare, 
  Clock,
  Globe,
  Server,
  Smartphone,
  FileCode,
  Layers,
  GitBranch,
  Package,
  Palette,
  Shield,
  Zap
} from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    {
      category: 'Languages & Frameworks',
      icon: Code,
      color: 'from-blue-500 to-blue-600',
      skills: [
        { name: 'HTML', level: 95, icon: Globe, color: 'text-orange-500' },
        { name: 'CSS', level: 90, icon: Palette, color: 'text-blue-500' },
        { name: 'JavaScript', level: 90, icon: FileCode, color: 'text-yellow-500' },
        { name: 'TypeScript', level: 85, icon: FileCode, color: 'text-blue-600' },
        { name: 'PHP', level: 88, icon: Server, color: 'text-purple-600' },
        { name: 'React', level: 92, icon: Layers, color: 'text-cyan-500' },
        { name: 'React Native', level: 80, icon: Smartphone, color: 'text-cyan-600' },
        { name: 'Node.js', level: 85, icon: Server, color: 'text-green-600' },
        { name: 'Express.js', level: 85, icon: Zap, color: 'text-gray-700' },
        { name: 'Laravel', level: 88, icon: Shield, color: 'text-red-500' },
        { name: 'WordPress', level: 85, icon: Globe, color: 'text-blue-700' },
        { name: 'Shopify', level: 75, icon: Package, color: 'text-green-500' }
      ]
    },
    {
      category: 'Databases',
      icon: Database,
      color: 'from-green-500 to-green-600',
      skills: [
        { name: 'MySQL', level: 90, icon: Database, color: 'text-blue-600' },
        { name: 'MongoDB', level: 85, icon: Database, color: 'text-green-600' }
      ]
    },
    {
      category: 'Tools & Platforms',
      icon: Wrench,
      color: 'from-purple-500 to-purple-600',
      skills: [
        { name: 'Git', level: 90, icon: GitBranch, color: 'text-orange-600' },
        { name: 'GitHub', level: 90, icon: GitBranch, color: 'text-gray-800' },
        { name: 'Postman', level: 85, icon: Zap, color: 'text-orange-500' },
        { name: 'Redux', level: 80, icon: Layers, color: 'text-purple-600' },
        { name: 'Chakra UI', level: 85, icon: Palette, color: 'text-teal-500' },
        { name: 'Tailwind CSS', level: 95, icon: Palette, color: 'text-cyan-500' },
        { name: 'Bootstrap', level: 88, icon: Palette, color: 'text-purple-700' }
      ]
    }
  ];

  const softSkills = [
    { 
      name: 'Problem Solving', 
      icon: Lightbulb, 
      description: 'Analytical thinking and creative solutions to complex challenges', 
      level: 95,
      color: 'from-yellow-400 to-yellow-500'
    },
    { 
      name: 'Decision Making', 
      icon: Award, 
      description: 'Strategic thinking and making informed decisions under pressure', 
      level: 90,
      color: 'from-green-400 to-green-500'
    },
    { 
      name: 'Communication', 
      icon: MessageSquare, 
      description: 'Clear and effective communication with teams and clients', 
      level: 88,
      color: 'from-blue-400 to-blue-500'
    },
    { 
      name: 'Multitasking', 
      icon: Clock, 
      description: 'Efficiently managing multiple projects and deadlines', 
      level: 85,
      color: 'from-purple-400 to-purple-500'
    }
  ];

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-light-blue to-white">
        <div className="container mx-auto px-6">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              My <span className="text-primary-blue">Skills</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and professional skills 
              developed through years of experience in full-stack development.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16 animate-fade-in">
              Technical Skills
            </h2>
            
            <div className="space-y-12">
              {technicalSkills.map((category, index) => (
                <div
                  key={index}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="text-center mb-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl mb-4`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                    {category.skills.map((skill, idx) => (
                      <div
                        key={idx}
                        className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group text-center"
                      >
                        <div className="mb-4">
                          <div className="w-16 h-16 mx-auto bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-gray-100 transition-colors duration-300">
                            <skill.icon className={`w-8 h-8 ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                          </div>
                        </div>
                        
                        <h4 className="font-semibold text-gray-900 mb-3 group-hover:text-primary-blue transition-colors">
                          {skill.name}
                        </h4>
                        
                        <div className="mb-2">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="h-2 rounded-full bg-gradient-to-r from-primary-blue to-dark-blue transition-all duration-1000 ease-out"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                        
                        <span className="text-sm font-medium text-gray-500">
                          {skill.level}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Soft Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16 animate-fade-in">
              Professional Skills
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in-up group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${skill.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      <skill.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-blue transition-colors">
                        {skill.name}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {skill.description}
                      </p>
                      <div className="flex items-center space-x-3">
                        <div className="flex-grow bg-gray-200 rounded-full h-3">
                          <div
                            className={`h-3 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-semibold text-primary-blue">
                          {skill.level}%
                        </span>
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

export default Skills;
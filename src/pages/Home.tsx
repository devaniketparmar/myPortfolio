import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-light-blue to-white">
        <div className="container mx-auto px-6 py-20">
          <div className="text-center animate-fade-in">
            <div className="mb-8 animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
                Hi, I'm{' '}
                <span className="text-primary-blue bg-gradient-to-r from-primary-blue to-dark-blue bg-clip-text text-transparent">
                  Aniket Parmar
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium text-gray-600 mb-6">
                Full Stack Web Developer
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
                Crafting scalable web solutions with React, Node.js, and Laravel
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up">
              <Link
                to="/contact"
                className="bg-primary-blue text-white px-8 py-4 rounded-full font-semibold hover:bg-dark-blue transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <Link
                to="/projects"
                className="border-2 border-primary-blue text-primary-blue px-8 py-4 rounded-full font-semibold hover:bg-primary-blue hover:text-white transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
              >
                <span>View Projects</span>
              </Link>
            </div>

            <div className="flex justify-center space-x-6 animate-fade-in-up">
              <a
                href="https://github.com/devaniketparmar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-blue transform hover:scale-110 transition-all duration-300"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/aniket-parmar-a42597239"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-blue transform hover:scale-110 transition-all duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:aniketparmar068@gmail.com"
                className="text-gray-400 hover:text-primary-blue transform hover:scale-110 transition-all duration-300"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Summary Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 animate-fade-in-up">
              Building Digital Excellence
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-12 animate-fade-in-up">
              Dynamic Full Stack Web Developer skilled in building scalable web applications using React, Node.js, MySQL, MongoDB, Laravel, and WordPress. Experienced in creating robust solutions like RawVectors.com and Jayhovillage, with a passion for delivering user-friendly, innovative digital experiences.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="text-center p-6 rounded-xl bg-light-blue hover:shadow-lg transition-all duration-300 animate-fade-in-up">
                <div className="text-4xl font-bold text-primary-blue mb-2">3+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-light-blue hover:shadow-lg transition-all duration-300 animate-fade-in-up">
                <div className="text-4xl font-bold text-primary-blue mb-2">100+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-light-blue hover:shadow-lg transition-all duration-300 animate-fade-in-up">
                <div className="text-4xl font-bold text-primary-blue mb-2">100%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
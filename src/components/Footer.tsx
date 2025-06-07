import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-2">
            <Code className="w-5 h-5 text-primary-blue" />
            <span className="font-semibold">Aniket Parmar</span>
          </div>
          
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>using React & Tailwind CSS</span>
          </div>
          
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} Aniket Parmar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
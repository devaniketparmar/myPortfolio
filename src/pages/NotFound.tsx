import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-light-blue to-white flex items-center justify-center">
      <div className="container mx-auto px-6">
        <div className="text-center animate-fade-in">
          <div className="mb-8">
            <h1 className="text-9xl md:text-[12rem] font-bold text-primary-blue opacity-20">
              404
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 -mt-8">
              Oops! Page Not Found
            </h2>
            <p className="text-lg text-gray-600 max-w-md mx-auto mb-8">
              The page you're looking for doesn't exist. 
              Let's get you back to the home page.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="bg-primary-blue text-white px-8 py-4 rounded-full font-semibold hover:bg-dark-blue transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <Home className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="border-2 border-primary-blue text-primary-blue px-8 py-4 rounded-full font-semibold hover:bg-primary-blue hover:text-white transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Go Back</span>
            </button>
          </div>

          {/* Decorative Elements */}
          <div className="mt-16 opacity-10">
            <div className="flex justify-center space-x-4">
              <div className="w-3 h-3 bg-primary-blue rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-primary-blue rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-3 h-3 bg-primary-blue rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
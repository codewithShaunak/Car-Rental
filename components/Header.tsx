
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-brand-light-dark/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 border-b border-brand-gray">
          <div className="flex items-center">
             <svg className="h-8 w-8 text-brand-blue" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M5 11a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6h-1.5a1.5 1.5 0 0 0 0 3h1.5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1h-1.5a1.5 1.5 0 0 0 0 -3h1.5v-6" />
                <path d="M10 9v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />
                <path d="M14 5l1 -1l-1 -1" />
                <path d="M6 14l-1 1l1 1" />
            </svg>
            <span className="ml-3 text-2xl font-bold text-white tracking-wider">Prestige Rentals</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-300 hover:text-brand-blue transition-colors duration-200">Our Fleet</a>
            <a href="#" className="text-gray-300 hover:text-brand-blue transition-colors duration-200">Locations</a>
            <a href="#" className="text-gray-300 hover:text-brand-blue transition-colors duration-200">About Us</a>
          </nav>
          <button className="hidden md:block bg-brand-blue text-white px-5 py-2 rounded-lg font-semibold hover:bg-opacity-80 transition-all duration-200">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

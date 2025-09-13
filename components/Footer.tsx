
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-light-dark border-t border-brand-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <p className="text-center text-gray-400">
          &copy; {new Date().getFullYear()} Prestige Rentals. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

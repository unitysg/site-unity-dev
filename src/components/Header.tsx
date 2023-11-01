// src/components/Header.tsx
import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-800 to-blue-700 opacity-90 p-4 fixed w-full z-10 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-3xl font-bold">
          <a href="#" className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-300">Unity</a>
        </div>
        <button 
          className="text-white block md:hidden" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:flex`}>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8">  
            <li><a href="#about" className="text-white font-bold transition-colors duration-300 hover:text-gray-300">About</a></li>
            <li><a href="#projects" className="text-white font-bold transition-colors duration-300 hover:text-gray-300">Projects</a></li>
            <li><a href="#services" className="text-white font-bold transition-colors duration-300 hover:text-gray-300">Services</a></li>
            <li><a href="#contact" className="text-white font-bold transition-colors duration-300 hover:text-gray-300">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

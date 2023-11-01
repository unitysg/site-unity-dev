// src/components/Header.tsx
import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-800 to-blue-700 opacity-90 p-4 fixed w-full z-10 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-3xl font-bold">
          <a href="#" className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-300">Unity</a>
        </div>
        <nav>
          <ul className="flex space-x-8">  
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

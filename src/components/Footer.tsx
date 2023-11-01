// src/components/Footer.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-extrabold mb-4 text-gradient bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text">Unity</h3>
            <p>
              At Unity, we empower businesses with innovative software solutions. Since our inception in 2014, we have been on a mission to drive digital transformation, creating a profound impact across industries. Our expertise spans across a multitude of technologies, ensuring optimized solutions for our clients.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 relative">
              Quick Links
              <div className="absolute left-0 bottom-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600" style={{width: 'fit-content'}}></div>
            </h3>
            <ul className="space-y-1">
              <li><a href="#about" className="text-gray-300 hover:text-white">About</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-white">Projects</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white">Services</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 relative">
              Contact Us
              <div className="absolute left-0 bottom-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600" style={{width: 'fit-content'}}></div>
            </h3>
            <p className="flex items-center mb-2 text-gray-300 hover:text-white">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
              1679 S Dupont Hwy<br/>Dover, DE, 19901, USA
            </p>
            <p className="flex items-center mb-2 text-gray-300 hover:text-white">
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              ‪(440) 701-6777‬
            </p>
            <p className="flex items-center text-gray-300 hover:text-white">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              info@unity.dev
            </p>
          </div>
        </div>
        <hr className="mt-8 border-t-2 border-gray-700" />
        <div className="mt-4 text-center">
          © 2023 Unity. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

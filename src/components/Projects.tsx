// src/components/Projects.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProjectDiagram, faWallet, faGlobe, faBriefcase } from '@fortawesome/free-solid-svg-icons';

const projectsData = [
  {
    title: 'Ecosystem',
    icon: faProjectDiagram,
    description: 'Dive into the Unity Ecosystem, a pioneering blockchain venture that automates investments and facilitates global multicurrency transactions for all. It’s not just a project; it’s a movement towards financial inclusivity.',
  },
  {
    title: 'Wallet',
    icon: faWallet,
    description: 'Discover Unity Wallet, your complete financial companion, ingeniously built atop our robust ecosystem that brings everything you need, together. It’s more than a wallet; it’s your financial powerhouse.',
  },
  {
    title: 'Sites',
    icon: faGlobe,
    description: 'Explore Unity Sites, a revolutionary web hosting solution empowering everyone to create stable, high-performance websites using distributed hosting technology. Bring your online presence, to life.',
  },
  {
    title: 'Pro',
    icon: faBriefcase,
    description: 'Engage with Unity Pro, a holistic business suite integrating HR, Google services, and Chat all on top of our robust Ecosystem and Wallet to provide everything in one spot. It’s beyond a suite; it’s your business amplified.',
  },
];

const Projects = () => {
  return (
    <section className="py-16 px-4 md:px-0 bg-blue-50" id="projects">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold mb-4 inline-block">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-300">Projects</span>
          <div className="h-1 w-full mt-2 bg-gradient-to-r from-blue-600 to-blue-300 rounded-full"></div>
        </h2>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {projectsData.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-blue-100 transition duration-300 ease-in-out">
            <div className="flex items-center mb-4">
              <div className="text-blue-800 bg-blue-100 p-4 rounded-full">
                <FontAwesomeIcon icon={project.icon} size="2x" />
              </div>
              <h3 className="text-2xl font-bold ml-4">{project.title}</h3>
            </div>
            <p className="text-gray-700 mb-4">
              {project.description}
            </p>
            <a href="#" className="text-blue-500 hover:text-blue-600 transition duration-300 ease-in-out">→ View Site</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

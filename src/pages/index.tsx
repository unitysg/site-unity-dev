// src/pages/index.tsx
import React from 'react';
import Featured from '../components/Featured';
import About from '../components/About';
import Projects from '../components/Projects';
import Services from '../components/Services';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div>
      <Featured />
      <About />
      <Projects />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;

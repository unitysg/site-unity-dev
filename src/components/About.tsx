// src/components/About.tsx
import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section className="py-16 px-4 md:px-0 bg-gradient-to-r from-gray-50 to-gray-200" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row mb-12 space-y-8 md:space-y-0 md:space-x-8">
          <div className="flex-1">
            <h2 className="text-4xl font-extrabold mb-4 inline-block">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-300">Unity</span>
              <div className="h-1 w-full mt-2 bg-gradient-to-r from-blue-600 to-blue-300 rounded-full"></div>
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Founded in 2014, Unity embarked on a mission to create a global impact. Initially developing tools to aid charities, we have dedicated all profits to philanthropic endeavors from the outset. Our vast pool of highly experienced developers enabled us to transition into creating an open financial system on the blockchain. This venture aims to democratize automated investment and wealth growth, transcending socio-economic barriers.
            </p>
            <p className="text-lg text-gray-700">
              Over the years, our commitment to fostering a fair financial ecosystem while maintaining our charitable roots has remained unwavering. The journey that began with a noble cause has evolved into a holistic approach towards financial empowerment and altruism.
            </p>
          </div>
          <div className="flex-1">
            <Image src="/about.jpg" alt="About Unity" width={600} height={400} className="rounded-lg" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
          <div className="flex-1 bg-gray-100 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p>
              Our focus is on ushering in the future of finance that prioritizes the average individual, ensuring the best financial tools and opportunities are accessible to everyone, not just a select few. Through blockchain technology, we are democratizing access to financial growth and security.
            </p>
          </div>
          <div className="flex-1 bg-gray-100 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Our Clients</h3>
            <p>
              We&apos;ve worked with many clients across the globe; from startups to companies such as Walmart, Apple, Cigna, and more.  Our team specializes in the latest cutting-edge technologies.  So whether you need us for an entire project or to contract a single developer, we&apos;re ready!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

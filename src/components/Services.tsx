// src/components/Services.tsx
import React from 'react';

const Services: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-0 bg-gradient-to-r from-gray-50 to-gray-200" id="services">
      <div className="max-w-7xl mx-auto flex flex-wrap">
        <div className="w-full md:w-1/2 lg:mt-10">
          <img src="/services.jpg" alt="Services" className="rounded-lg mx-auto md:mx-0" />
        </div>
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-4xl font-extrabold mb-4 inline-block">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-300">Services</span>
            <div className="h-1 w-full mt-2 bg-gradient-to-r from-blue-600 to-blue-300 rounded-full"></div>
          </h2>
          <p className="text-lg mb-4">
            With a rich legacy in software engineering, we at Unity bring extensive experience to both legacy and cutting-edge technologies. Our expertise spans across Linux, AWS, Apache, Nginx, SQL, NoSQL, PHP, Perl, Python, NodeJS, React, and much more. Our adeptness is not confined to these technologies alone; we are constantly evolving with the industry trends, mastering multiple frameworks, and exploring emerging technologies.
          </p>
          <p className="text-lg">
            We excel in modern JavaScript development, offering seamless migrations, robust solutions, and innovative strategies to propel your business into the future. Our services are designed to cater to a wide spectrum of software development needs, ensuring we are a one-stop solution for all your tech-related endeavors.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;

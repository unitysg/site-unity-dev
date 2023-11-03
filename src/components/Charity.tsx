// src/components/Charity.tsx
import React from 'react';
import Image from 'next/image';

const Charity = () => {
  return (
    <section className="py-16 px-4 md:px-0 bg-gradient-to-r from-green-50 to-green-200" id="charity">
      <div className="max-w-7xl mx-auto flex md:flex-row flex-col">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-extrabold mb-4 inline-block">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-green-400">Charity</span>
            <div className="h-1 w-full mt-2 bg-gradient-to-r from-green-800 to-green-400 rounded-full"></div>
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Since our inception, Unity has epitomized a steadfast nonprofit ethos, channeling our acumen in crafting web solutions and tools primarily for other charitable entities. Beyond extending discounted services, our operational model is designed to ensure that every penny earned, post operational costs, is funneled towards philanthropic endeavors.
          </p>
          <p className="text-lg text-gray-700">
            Unity Charity embodies a pioneering endowment-first philosophy. Initially, all funds are meticulously directed into a diversified portfolio of low-risk bonds, scrupulously vetted to eschew involvement in immoral industries and usuries, thus resonating with the shared moral compass of our multifaceted global partners. Our proprietary financial management system autonomously oversees these bonds, securing aggressive compounding and unparalleled returns within the industry. The monthly dividends are strategically allocated; a portion is reinvested to bolster future returns, while the remainder is channelled to partner charities aiding orphans, refugees, and the most vulnerable across the globe.
          </p>
        </div>
        <div className="md:w-1/2 md:pl-8">
          <Image src="/charity.webp" alt="Our Charity" width={600} height={400} className="rounded-lg shadow-lg mb-8" />
          <div className="p-4 border border-gray-300 rounded-lg shadow-lg">
            <p className="text-lg text-gray-700">
              Engage with Unity Charity directly by donating or support us through utilizing our services and products, as the profits are directed to charity. Additionally, our revolutionary &quot;Endowment-as-a-Service&quot; is available to all charities. Discover more at the <a href="https://unity.charity" target="_blank" rel="noopener noreferrer"><span className="text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-green-600">Unity Charity Site</span></a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Charity;

// src/components/Featured.tsx
import React from 'react';
import Slider from "react-slick";

const carouselData = [
  {
    backgroundImage: '/slide1.avif',
    mainText: 'Empowering Innovations',
    captionText: 'At Unity, we pioneer digital solutions that drive transformation, making a tangible impact across industries.'
  },
  {
    backgroundImage: '/slide2.avif',
    mainText: 'Cutting-Edge Expertise',
    captionText: 'Harness the power of modern technologies including Node.js and Blockchain to propel your business into the future.'
  },
  {
    backgroundImage: '/slide3.avif',
    mainText: 'Trailblazing Projects',
    captionText: 'Explore our ecosystem, designed to automate investments and provide a robust financial infrastructure for all.'
  },
  {
    backgroundImage: '/slide4.avif',
    mainText: 'Seasoned Professionals',
    captionText: 'Our team comprises seasoned developers with a rich portfolio of successfully delivered high-impact projects.'
  },
  {
    backgroundImage: '/slide5.avif',
    mainText: 'Let’s Build Together',
    captionText: 'Engage with us for your development needs or access our pool of developers for freelance projects. Your success is our mission.'
  }
];

const settings = {
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
};

const Featured = () => {
    return (
      <section className="relative carousel-container">
        <Slider {...settings}>
          {carouselData.map((slide, index) => (
            <div key={index} className="slide-item relative flex items-center justify-center h-[600px]">
              <img src={slide.backgroundImage} alt={`Slide ${index + 1}`} className="absolute inset-0 w-full h-full object-cover" />
              <div className="text-center text-white p-8 relative z-10 flex flex-col items-center justify-center w-full h-full">
                <h2 className="text-4xl mb-4">{slide.mainText}</h2>
                <p>{slide.captionText}</p>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    );
  };
  
  export default Featured;
  
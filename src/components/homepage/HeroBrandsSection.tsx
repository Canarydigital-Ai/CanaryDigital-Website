import React from 'react';

import Vishraam from '../../assets/vihraam.png';
import Evolv from '../../assets/evolv.png';
import Foggy from '../../assets/foggy.png';
import KLF from '../../assets/klf.png';
import Joans from '../../assets/joans.png';
import UrbanGossip from '../../assets/urban-gossip.png';
import Shaaman from '../../assets/shaaman.png';
import Flora from '../../assets/flora.png';

const HeroBrandsSection:React.FC = () => {
  const brands = [
    { name: 'Urban Gossip', logo: UrbanGossip },
    { name: 'Le Flora Towers', logo: Flora },
    { name: 'Shaaman', logo: Shaaman },
    { name: 'Joans Pastry', logo: Joans },
    { name: 'KLF', logo: KLF },
     { name: 'Foggy', logo: Foggy },
    { name: 'Evolv', logo: Evolv },
    { name: 'Visbraam', logo: Vishraam },
   
  ];

  return (
    <section className="bg-black text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Hero Text */}
        <div className="flex items-start justify-between mb-20">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light leading-relaxed">
              Smart brands need smart marketing. We bring AI, design,
              development, and automation together to{' '}
              <span className="text-yellow-400 font-normal">grow your business</span>
            </h1>
          </div>
          
          {/* Circular Badge */}
          <div className="hidden lg:block">
            <div className="w-24 h-24 rounded-full border-2 border-white flex items-center justify-center">
              <div className="text-center text-xs">
                <div className="font-semibold">INFINITE</div>
                <div className="font-semibold">SCROLL</div>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16 items-center justify-items-center mb-16">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="w-32 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* Our Products Section */}
        <div className="flex items-center justify-between pt-8 border-t border-gray-800">
          <div className="flex items-center space-x-3">
            <span className="text-lg font-light">Our Products</span>
            <div className="text-yellow-400">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center space-x-4">
            <button className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-gray-800 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-gray-800 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBrandsSection;
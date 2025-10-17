import React, { useState } from 'react';
import Logo from '../../assets/Frame 85.png'

const Navbar:React.FC = () => {
  const [activeLink, setActiveLink] = useState('Home');

  const navLinks = [
    'Home',
    'About Us',
    'Products',
    'Services',
    'Blogs',
    'Case Studies',
    'Portfolio',
    'Contact Us'
  ];

  return (
    <nav className="bg-gray-900 px-6 py-4">
      <div className="max-w-[90%] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src={Logo}
            alt="Canary Digital Logo" 
            className="h-[111 px] w-[54 px]"
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => setActiveLink(link)}
              className={`text-sm font-medium transition-colors ${
                activeLink === link
                  ? 'text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {link}
            </button>
          ))}
        </div>

        {/* Get In Touch Button */}
        <button className="hidden lg:block bg-yellow-400 text-gray-900 px-6 py-2 rounded-md text-sm font-semibold hover:bg-yellow-500 transition-colors">
          Get In Touch
        </button>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
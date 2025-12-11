import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-[1533px] border-2 border-[#101010]-500 bg-[#101010] p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Left Section */}
          <div className="space-y-8">
            <div>
              <p className="text-gray-400 text-2xl mb-4 mt-8">Contact Us</p>
              <h1 className="text-[40px] md:text-4xl lg:text-5xl text-[#FBCA0C]  leading-tight mt-5">
                Let's unlock together the{' '}
                <span className="  text-white ">next level of possibilities! Reach out. </span>
              </h1>
            </div>

            <div className="space-y-4">
              <p className="text-gray-400 text-[32px]">Get in touch</p>
              <div className="space-y-2">
                <a 
                  href="mailto:info@canarydigital.ai" 
                  className="flex items-center text-white hover:text-[#FBCA0C] transition-colors"
                >
                  <svg 
                    className="w-4 h-4 mr-2" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  info@canarydigital.ai
                </a>
                <a 
                  href="tel:+917994431793" 
                  className="flex items-center text-white hover:text-[#FBCA0C] transition-colors"
                >
                  <svg 
                    className="w-4 h-4 mr-2" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  +91 7994431793
                </a>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="bg-black rounded-lg p-8 md:p-10 w-[575px] h-[675px]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white text-sm mb-3">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[#1A1A1A] border-none text-white placeholder-gray-600 py-3 px-4 rounded focus:outline-none focus:ring-1 focus:ring-[#FBCA0C] transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-white text-sm mb-3">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#1A1A1A] border-none text-white placeholder-gray-600 py-3 px-4 rounded focus:outline-none focus:ring-1 focus:ring-[#FBCA0C] transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-white text-sm mb-3">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-[#1A1A1A] border-none text-white placeholder-gray-600 py-3 px-4 rounded focus:outline-none focus:ring-1 focus:ring-[#FBCA0C] transition-all"
                />
              </div>

              <div>
                <label className="block text-white text-sm mb-3">Message</label>
                <textarea
                  name="message"
                  placeholder="Type your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-[#1A1A1A] border-none text-white placeholder-gray-600 py-3 px-4 rounded focus:outline-none focus:ring-1 focus:ring-[#FBCA0C] transition-all resize-none"
                  required
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="bg-white text-black px-8 py-3 rounded-full hover:bg-[#FBCA0C] transition-colors duration-300 flex items-center space-x-3 font-medium"
                >
                  <svg 
                    className="w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M14 5l7 7m0 0l-7 7m7-7H3" 
                    />
                  </svg>
                  <span>Get a Solution</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
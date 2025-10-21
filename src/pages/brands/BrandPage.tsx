import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import ContactSection from '../../components/homepage/ContactSection'
import BrandSection from '../../components/brands/BrandSection'

const BrandPage: React.FC = () => {
  return (
    <div  className="h-screen overflow-y-auto scrollbar-hide bg-[#000000] text-white">
      <Navbar />
      <BrandSection />
      <ContactSection />
    </div>
  )
}

export default BrandPage
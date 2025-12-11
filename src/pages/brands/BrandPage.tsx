import React from 'react'
import Navbar from '../../components/navbar/Navbar' 
import BrandSection from '../../components/brands/BrandSection'
import FooterSection from '../../components/Footer/FooterSection'

const BrandPage: React.FC = () => {
  return (
    <div className="h-screen overflow-y-auto scrollbar-hide bg-[#000000] text-white">
      <Navbar />
      <BrandSection />
      <FooterSection />
    </div>
  )
}

export default BrandPage
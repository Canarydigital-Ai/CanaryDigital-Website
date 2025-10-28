import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import ServicePageSection from '../../components/service/ServicePageSection'
import FooterSection from '../../components/Footer/FooterSection'

const ServicePage: React.FC = () => {
  return (
    <div className="h-screen overflow-y-auto scrollbar-hide bg-[#000000] text-white">
      <Navbar />
      <ServicePageSection />
      <FooterSection />
    </div>
  )
}

export default ServicePage
import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import ServicePageSection from '../../components/service/ServicePageSection'

const ServicePage: React.FC = () => {
  return (
    <div className="h-screen overflow-y-auto scrollbar-hide bg-[#000000] text-white">
      <Navbar />
      <ServicePageSection />
    </div>
  )
}

export default ServicePage
import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import IndustryPageSection from '../../components/about/IndustryPageSection'
import FooterSection from '../../components/Footer/FooterSection'

const IndustryServePage: React.FC = () => {
  return (
    <div className="h-screen overflow-y-auto scrollbar-hide bg-[#000000] text-white">
      <Navbar />
      <IndustryPageSection />
      <FooterSection />
    </div>
  )
}

export default IndustryServePage
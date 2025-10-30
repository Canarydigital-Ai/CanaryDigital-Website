import React from 'react'
import PortFolioSection from '../../components/portfolio/PortFolioSection'
import Navbar from '../../components/navbar/Navbar'
import FooterSection from '../../components/Footer/FooterSection'

const PortfolioPage: React.FC = () => {
  return (
    <div className="h-screen overflow-y-auto scrollbar-hide bg-[#000000] text-white">
      <Navbar />
      <PortFolioSection />
      <FooterSection />
    </div>
  )
}

export default PortfolioPage
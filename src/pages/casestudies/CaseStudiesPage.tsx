import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import FooterSection from '../../components/Footer/FooterSection'
import CaseStudyMainPage from '../../components/casestudy/CaseStudyMainPage'

const CaseStudiesPage: React.FC = () => {
  return (
    <div className="h-screen overflow-y-auto scrollbar-hide bg-[#000000] text-white">
      <Navbar />
      <CaseStudyMainPage />
      <FooterSection />
    </div>
  )
}

export default CaseStudiesPage
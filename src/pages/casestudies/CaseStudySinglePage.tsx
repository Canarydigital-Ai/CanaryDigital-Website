import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import FooterSection from '../../components/Footer/FooterSection'
import SingleCaseStudies from '../../components/casestudy/SingleCaseStudies'

const CaseStudySinglePage: React.FC = () => {
  return (
    <div className="h-screen overflow-y-auto scrollbar-hide bg-[#000000] text-white">
      <Navbar />
      <SingleCaseStudies />
      <FooterSection />
    </div>  )
}

export default CaseStudySinglePage
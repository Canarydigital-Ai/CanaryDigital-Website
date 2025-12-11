import React from 'react'
import ProductSection2 from '../../components/products/ProductSection2'
import Navbar from '../../components/navbar/Navbar'
import FooterSection from '../../components/Footer/FooterSection'

const ProductPage2: React.FC = () => {
  return (
     <div className="h-screen overflow-y-auto scrollbar-hide bg-[#000000] text-white">
      <Navbar />
      <ProductSection2 />
      <FooterSection />
    </div>
  )
}

export default ProductPage2

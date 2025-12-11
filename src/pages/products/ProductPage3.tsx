import React from 'react'
import ProductSection3 from '../../components/products/ProductSection3'
import Navbar from '../../components/navbar/Navbar'
import FooterSection from '../../components/Footer/FooterSection'

const ProductPage3: React.FC = () => {
  return (
    <div className="h-screen overflow-y-auto scrollbar-hide bg-[#000000] text-white">
      <Navbar />
      <ProductSection3 />
      <FooterSection />
    </div>
  )
}

export default ProductPage3

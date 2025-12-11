import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import ProductSection4 from '../../components/products/ProductSection4'
import FooterSection from '../../components/Footer/FooterSection'

const ProductPage4: React.FC = () => {
  return (
    <div className="h-screen overflow-y-auto scrollbar-hide bg-[#000000] text-white">
      <Navbar />
      <ProductSection4 />
      <FooterSection />
    </div>
  )
}

export default ProductPage4

import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import FooterSection from '../../components/Footer/FooterSection'
import ProductSection5 from '../../components/products/ProductSection5'

const ProductPage5: React.FC = () => {
  return (
    <div className="h-screen overflow-y-auto scrollbar-hide bg-[#000000] text-white">
      <Navbar />
      <ProductSection5 />
      <FooterSection />
    </div>
  )
}

export default ProductPage5

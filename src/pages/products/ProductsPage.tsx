import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import FooterSection from '../../components/Footer/FooterSection'
import ProductPageSection from '../../components/products/ProductPageSection'

const ProductsPage: React.FC = () => {
  return (
    <div className="h-screen overflow-y-auto scrollbar-hide bg-[#000000] text-white">
      <Navbar />
      <ProductPageSection />
      <FooterSection />
    </div>
  )
}

export default ProductsPage
import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import FooterSection from '../../components/Footer/FooterSection'
import BlogSinglePageSection from '../../components/blogs/BlogSinglePageSection'

const BlogSinglePage: React.FC = () => {
  return (
    <div className="h-screen overflow-y-auto scrollbar-hide bg-[#000000] text-white">
      <Navbar /> 
      <BlogSinglePageSection />
      <FooterSection />
    </div>
  )
}

export default BlogSinglePage
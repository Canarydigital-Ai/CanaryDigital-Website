import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import BlogsSection from '../../components/blogs/BlogsSection'
import FooterSection from '../../components/Footer/FooterSection'

const BlogsPage: React.FC = () => {
  return (
    <div  className="h-screen overflow-y-auto scrollbar-hide bg-[#000000] text-white">
      <Navbar />
      <BlogsSection /> 
      <FooterSection />
    </div>
  )
}

export default BlogsPage
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
 
const HomePage = lazy(() => import('./pages/home/HomePage'));
const AboutUsPage = lazy(() => import('./pages/about/AboutUsPage'));
const BrandPage = lazy(() => import('./pages/brands/BrandPage'));
const ProductsPage = lazy(() => import('./pages/products/ProductsPage'));
const ServicePage = lazy(() => import('./pages/services/ServicePage'));
const PortfolioPage = lazy(() => import('./pages/portfolio/PortfolioPage'));
const BlogsPage = lazy(() => import('./pages/blogs/BlogsPage'));
const BlogSinglePage = lazy(() => import('./pages/blogs/BlogSinglePage'));
const IndustryServePage = lazy(() => import('./pages/about/IndustryServePage'));
const CaseStudiesPage = lazy(() => import('./pages/casestudies/CaseStudiesPage'));
const CaseStudySinglePage = lazy(() => import('./pages/casestudies/CaseStudySinglePage'));
const ContactForm = lazy(() => import('./pages/contactForm/ContactForm'));

const App: React.FC = () => {
  return (
    <Router 
    >
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/brands" element={<BrandPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blogs-single" element={<BlogSinglePage />} />
          <Route path="/industries-we-serve" element={<IndustryServePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/case-studies/:id" element={<CaseStudySinglePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path='/contact' element={<ContactForm />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;

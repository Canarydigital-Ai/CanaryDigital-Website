import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import ProductsPage from './pages/products/ProductsPage';
import CaseStudiesPage from './pages/casestudies/CaseStudiesPage';
import CaseStudySinglePage from './pages/casestudies/CaseStudySinglePage';
import AboutUsPage from './pages/about/AboutUsPage';
import BlogSinglePage from './pages/blogs/BlogSinglePage';
import ProductPage2 from './pages/products/ProductPage2';
import ProductPage3 from './pages/products/ProductPage3';
import ProductPage4 from './pages/products/ProductPage4';
import ProductPage5 from './pages/products/ProductPage5';
 
const HomePage = lazy(() => import('./pages/home/HomePage'));
const BrandPage = lazy(() => import('./pages/brands/BrandPage'));
const ServicePage = lazy(() => import('./pages/services/ServicePage'));
const PortfolioPage = lazy(() => import('./pages/portfolio/PortfolioPage'));
const BlogsPage = lazy(() => import('./pages/blogs/BlogsPage'));
const IndustryServePage = lazy(() => import('./pages/about/IndustryServePage'));

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
          <Route path="/products-2" element={<ProductPage2 />} />
          <Route path="/products-3" element={<ProductPage3 />} />
          <Route path="/products-4" element={<ProductPage4 />} />
          <Route path="/products-5" element={<ProductPage5 />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/case-studies/projects" element={<CaseStudySinglePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
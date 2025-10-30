import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import ProductsPage from './pages/products/ProductsPage';
 
const HomePage = lazy(() => import('./pages/home/HomePage'));
const BrandPage = lazy(() => import('./pages/brands/BrandPage'));
const ServicePage = lazy(() => import('./pages/services/ServicePage'));
const PortfolioPage = lazy(() => import('./pages/portfolio/PortfolioPage'));
const BlogsPage = lazy(() => import('./pages/blogs/BlogsPage'));
const IndustryServePage = lazy(() => import('./pages/industry/IndustryServePage'));

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
          <Route path="/industries-we-serve" element={<IndustryServePage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BrandPage from './pages/brands/BrandPage';
import ServicePage from './pages/services/ServicePage'; 
 
const HomePage = lazy(() => import('./pages/home/HomePage'));

const App: React.FC = () => {
  return (
    <Router 
    >
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/brands" element={<BrandPage />} />
          <Route path="/services" element={<ServicePage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Loader from './components/loader/Loader';

// Lazy-loaded pages
const HomePage = lazy(() => import('./pages/home/HomePage'));

const App: React.FC = () => {
  return (
    <Router
      // future={{
      //   v7_startTransition: true,
      //   v7_relativeSplatPath: true
      // }}
    >
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
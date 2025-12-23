import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Outlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import SmoothScroll from './components/core/SmoothScroll';
import Cursor from './components/core/Cursor';
import NoiseOverlay from './components/core/NoiseOverlay';
import Navbar from './components/ui/Navbar';

import Home from './pages/Home';
import InProgress from './pages/InProgress';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/pages" element={<InProgress title="Pages" />} />
          <Route path="/blog" element={<InProgress title="Journal" />} />
          <Route path="/shop" element={<InProgress title="Shop" />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <SmoothScroll>
        <Cursor />
        <NoiseOverlay />
        
        <main className="relative z-10 w-full min-h-screen">
          <AnimatedRoutes />
        </main>
      </SmoothScroll>
    </Router>
  );
}

export default App;

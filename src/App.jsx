import React from 'react';
import MatrixRainingCode from './components/MatrixRainingEffect';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Section1';
import Testimonials from './components/Section2';
import Pricing from './components/Section3';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <MatrixRainingCode className="absolute inset-0" />
      <div className="flex flex-col">
        <Navbar />
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
        <Footer />
      </div>
    </div>
  );
}

export default App;

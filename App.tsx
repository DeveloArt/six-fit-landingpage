import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Download from './components/Download';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import Workout from './components/Workout';
import { analytics } from './services/firebaseService';
import Pricing from './components/pricing';

const HomePage: React.FC = () => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="grow">
      <Hero />
      <Workout />
      <Features />
      <Testimonials />
      <Pricing />
      <Download />
    </main>
    <Footer />
  </div>
);

const App: React.FC = () => {
  
  // Analytics Initialization Mock
  useEffect(() => {
    analytics.logEvent('app_initialized');
  }, []);

  return (
    <Router basename={import.meta.env.PROD ? "/sixfit" : undefined}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
};

export default App;
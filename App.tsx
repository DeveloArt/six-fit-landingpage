import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Download from './components/Download';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import WorkoutPlans from './components/WorkoutPlans';
import { analytics } from './services/firebaseService';

const HomePage: React.FC = () => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-grow">
      <Hero />
      <Features />
      <Testimonials />
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
        <Route path="/workout-plans" element={<WorkoutPlans />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
};

export default App;
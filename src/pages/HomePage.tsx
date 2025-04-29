import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import FeaturedTools from '../components/FeaturedTools';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <div className="space-y-20">
          <HeroSection />
          <HowItWorks />
          <FeaturedTools />
          <Testimonials />
          <CallToAction />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage; 
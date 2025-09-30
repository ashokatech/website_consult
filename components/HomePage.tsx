import React from 'react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import WhyChooseUsSection from './WhyChooseUsSection';
import ContactSection from './ContactSection';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ContactSection />
    </>
  );
};

export default HomePage;

import React from 'react';

const HeroSection: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href')?.substring(1);
    if (targetId) {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 to-sky-100 py-24 md:py-32 lg:py-40">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://picsum.photos/seed/hrbg/1920/1080')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-6 leading-tight">
          Transforming Workplaces with People-First HR Solutions
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
          We provide HR consulting, compliance, and talent solutions for growing businesses.
        </p>
        <a 
          href="#contact" 
          onClick={handleNavClick}
          className="inline-block bg-gradient-to-r from-blue-600 to-sky-500 text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          Book a Free Consultation
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative text-white overflow-hidden">
       <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{backgroundImage: "url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3')"}}
      ></div>
      <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"></div>
      <div className="container mx-auto px-6 relative z-10 flex items-center justify-center min-h-[70vh] md:min-h-[80vh]">
        <div className="text-center max-w-4xl py-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              <span className="block">Builds Stories of Choice</span>
            </h1>
            <div className="max-w-4xl mx-auto space-y-4 text-gray-200 text-lg">
                <p>"SMCS wears the badge, 'Feature is something and Benefit is something does'."</p>
                <p>At SMCS, we join hands with stakeholder communities to build eco-systems based on 3E's - Efficiency, Effectiveness, and Empathy in narrating SMCS chronicles.</p>
                <p>SMCS stands with you in strategy, collaboration, innovation and streamline to transform individual potential into stories of choice.</p>
                <p className="font-semibold text-sky-300 text-xl pt-4">What's your story? Let us collaborate and together celebrate your story of choice.</p>
            </div>
            <a 
              href="/#contact" 
              className="mt-10 inline-block bg-blue-600 text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
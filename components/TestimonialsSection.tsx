import React, { useState, useEffect, useCallback } from 'react';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Innovate HR completely transformed our recruitment process. Their team is knowledgeable, professional, and a true partner in our growth. We couldn't have scaled our team without them.",
    name: 'Jane Doe',
    title: 'CEO',
    company: 'Tech Solutions Inc.',
    avatar: 'https://picsum.photos/seed/person1/100/100',
  },
  {
    quote: "Navigating HR compliance was a major challenge for us. Innovate HR provided clear, actionable guidance that gave us peace of mind. Their expertise is invaluable.",
    name: 'John Smith',
    title: 'Founder',
    company: 'Creative Co.',
    avatar: 'https://picsum.photos/seed/person2/100/100',
  },
  {
    quote: "The employee training programs developed by Innovate HR have significantly boosted morale and productivity. They truly understand our culture and deliver tailored content that resonates with our team.",
    name: 'Emily White',
    title: 'Operations Manager',
    company: 'Logistics Pro',
    avatar: 'https://picsum.photos/seed/person3/100/100',
  },
   {
    quote: "As a fast-growing startup, we needed to establish our HR infrastructure quickly. Innovate HR was the perfect partner, providing both strategic guidance and hands-on support. They are a true extension of our team.",
    name: 'David Lee',
    title: 'COO',
    company: 'NextGen Innovations',
    avatar: 'https://picsum.photos/seed/person4/100/100',
  },
  {
    quote: "The team's expertise in benefits administration saved us countless hours and helped us offer a more competitive package to our employees. Their professionalism and responsiveness are second to none.",
    name: 'Maria Garcia',
    title: 'Finance Director',
    company: 'Global Goods Co.',
    avatar: 'https://picsum.photos/seed/person5/100/100',
  },
];

const clientLogos = [
    { src: "https://tailwindui.com/img/logos/158x48/transistor-logo-gray-400.svg", alt: "Transistor" },
    { src: "https://tailwindui.com/img/logos/158x48/reform-logo-gray-400.svg", alt: "Reform" },
    { src: "https://tailwindui.com/img/logos/158x48/tuple-logo-gray-400.svg", alt: "Tuple" },
    { src: "https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-400.svg", alt: "SavvyCal" },
    { src: "https://tailwindui.com/img/logos/158x48/statamic-logo-gray-400.svg", alt: "Statamic" },
];


const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, []);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 5000); // Change testimonial every 5 seconds
    return () => clearInterval(timer);
  }, [nextTestimonial]);

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-sky-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            We're proud to have earned the trust of businesses across various industries.
          </p>
        </div>
        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-shrink-0 w-full px-4">
                  <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg text-center">
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-20 h-20 rounded-full mx-auto mb-6 border-4 border-blue-200" />
                    <p className="text-gray-600 italic text-lg mb-6">"{testimonial.quote}"</p>
                    <div className="font-bold text-gray-800">{testimonial.name}</div>
                    <div className="text-gray-500">{testimonial.title}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button onClick={prevTestimonial} className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>
          <button onClick={nextTestimonial} className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </div>

        <div className="mt-20 text-center">
            <h3 className="text-lg font-semibold text-gray-600 mb-8">Trusted by industry-leading companies</h3>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
                {clientLogos.map((logo, index) => (
                     <img key={index} src={logo.src} alt={logo.alt} className="h-10 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
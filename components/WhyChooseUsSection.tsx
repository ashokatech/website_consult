import React from 'react';

interface Feature {
  // Fix: Use React.ReactElement instead of JSX.Element to resolve namespace error.
  icon: React.ReactElement;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>,
    title: 'Proven Expertise',
    description: 'Our team comprises certified HR professionals with decades of combined experience across tech, finance, and manufacturing. We bring best practices and deep industry knowledge to every project.',
  },
  {
    icon: <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>,
    title: 'Tailored Solutions',
    description: 'We reject one-size-fits-all approaches. We invest time to understand your unique business, culture, and challenges, crafting bespoke HR strategies that deliver tangible results for you.',
  },
  {
    icon: <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>,
    title: 'Strict Confidentiality',
    description: 'Trust is the foundation of our partnerships. We handle all your sensitive employee and company information with the utmost discretion and professional integrity, ensuring complete security.',
  },
  {
    icon: <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01M12 6v-1m0-1V4m0 2.01M18 10a6 6 0 11-12 0 6 6 0 0112 0z"></path></svg>,
    title: 'Cost-Effective',
    description: 'Gain access to a full suite of expert HR support and strategic guidance at a fraction of the cost of hiring a full-time senior HR manager, maximizing your return on investment.',
  },
];

const processSteps = [
    {
        step: '01',
        title: 'Discovery & Assessment',
        description: 'We begin with a deep dive into your current HR practices, challenges, and goals. This comprehensive audit allows us to understand your unique landscape.'
    },
    {
        step: '02',
        title: 'Strategy & Planning',
        description: 'Based on our findings, we collaborate with you to develop a customized HR roadmap. We define clear objectives, timelines, and success metrics for full alignment.'
    },
    {
        step: '03',
        title: 'Implementation & Support',
        description: 'Our team works hands-on to implement the new strategies, whether it’s rolling out a new performance system or leading a recruitment drive, ensuring a smooth transition.'
    },
    {
        step: '04',
        title: 'Review & Optimize',
        description: 'We believe in continuous improvement. We regularly review our progress against goals, gather feedback, and optimize our strategies to ensure long-term success and impact.'
    }
];


const WhyChooseUsSection: React.FC = () => {
  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Why Choose Us?</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Partnering with us means gaining a dedicated team committed to your success.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6">
              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-blue-100 mx-auto mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 pt-16 border-t border-gray-200">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Our Proven Process</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              We follow a structured approach to ensure clarity, alignment, and measurable success in every partnership.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center p-4">
                 <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-sky-400 text-white font-bold text-2xl mb-4 shadow-lg">
                   {step.step}
                 </div>
                 <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                 <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
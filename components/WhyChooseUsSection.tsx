import React from 'react';

const WhyChooseUsSection: React.FC = () => {
  const values = [
    {
        icon: <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>,
        text: 'Own actions, end results and empower each other',
    },
    {
        icon: <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>,
        text: 'Grow by disruption, development and integration of exceptional excellence',
    },
    {
        icon: <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>,
        text: 'Communication impact for equality of purpose',
    },
    {
        icon: <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>,
        text: 'Above all is collective genius of human experience as ethical innovators and end-users.',
    },
  ];

  return (
    <section id="values" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Our Core Values</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Our principles guide every action we take and every story we help build.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          {values.map((value, index) => (
            <div key={index} className="flex items-start space-x-6 p-4">
              <div className="flex-shrink-0 flex items-center justify-center h-20 w-20 rounded-full bg-blue-100">
                {value.icon}
              </div>
              <div>
                <p className="text-lg text-gray-700 font-medium leading-relaxed">{value.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
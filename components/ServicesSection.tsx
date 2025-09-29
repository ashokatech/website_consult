import React from 'react';

interface Service {
  icon: React.ReactElement;
  title: string;
  description: React.ReactNode;
}

const services: Service[] = [
  {
    icon: <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197m0 0A6.995 6.995 0 0012 12a6.995 6.995 0 00-3-5.197M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>,
    title: 'Recruitment & Talent Acquisition',
    description: (
      <>
        <p className="mb-3">We help you find, attract, and hire the best talent to drive your business forward.</p>
        <ul className="list-disc list-inside text-left text-sm space-y-1 text-gray-500">
            <li>Job Description Crafting</li>
            <li>Candidate Sourcing & Screening</li>
            <li>Interview Process Design</li>
            <li>Offer Management & Negotiation</li>
        </ul>
      </>
    ),
  },
  {
    icon: <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>,
    title: 'Compliance & Risk Management',
    description: (
      <>
        <p className="mb-3">Stay compliant with ever-changing labor laws and regulations, minimizing legal risks.</p>
        <ul className="list-disc list-inside text-left text-sm space-y-1 text-gray-500">
            <li>HR Audits & Assessments</li>
            <li>Employee Handbook Review</li>
            <li>Policy Implementation</li>
            <li>Regulatory Updates</li>
        </ul>
      </>
    ),
  },
  {
    icon: <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>,
    title: 'Payroll & Benefits Administration',
    description: (
       <>
        <p className="mb-3">Streamline payroll and benefits for accuracy, efficiency, and employee satisfaction.</p>
        <ul className="list-disc list-inside text-left text-sm space-y-1 text-gray-500">
            <li>Payroll Processing</li>
            <li>Benefits Package Design</li>
            <li>Vendor Management</li>
            <li>Open Enrollment Support</li>
        </ul>
      </>
    ),
  },
  {
    icon: <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222 4 2.222V20M12 12L8 9.778 12 7.556 16 9.778 12 12z"></path></svg>,
    title: 'Training & Development',
    description: (
       <>
        <p className="mb-3">Invest in your team with customized training programs that boost skills and engagement.</p>
        <ul className="list-disc list-inside text-left text-sm space-y-1 text-gray-500">
            <li>Leadership Development</li>
            <li>Communication Workshops</li>
            <li>Diversity & Inclusion Training</li>
            <li>Performance Feedback Coaching</li>
        </ul>
      </>
    ),
  },
   {
    icon: <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>,
    title: 'HR Policy & Handbook Design',
    description: (
       <>
        <p className="mb-3">Develop clear, fair, and effective HR policies that form the foundation of a great workplace.</p>
        <ul className="list-disc list-inside text-left text-sm space-y-1 text-gray-500">
            <li>Custom Policy Writing</li>
            <li>Handbook Creation</li>
            <li>Onboarding Procedures</li>
            <li>Remote Work Policies</li>
        </ul>
      </>
    ),
  },
   {
    icon: <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    title: 'Performance Management',
    description: (
       <>
        <p className="mb-3">Implement systems that drive high performance and meaningful career growth.</p>
        <ul className="list-disc list-inside text-left text-sm space-y-1 text-gray-500">
            <li>Review Cycle Design</li>
            <li>Goal Setting (OKRs/KPIs)</li>
            <li>Feedback Mechanisms</li>
            <li>Career Pathing</li>
        </ul>
      </>
    ),
  },
];

const ServiceCard: React.FC<Service> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 flex flex-col">
    <div className="mb-6">{icon}</div>
    <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
    <div className="text-gray-600 flex-grow">{description}</div>
  </div>
);


const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Our Services</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            We offer a comprehensive suite of HR services designed to meet the unique needs of your business.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
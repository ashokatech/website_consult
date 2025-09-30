import React from 'react';

const BulletPoint: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-start">
        <svg className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <span>{children}</span>
    </li>
);

const DiagramCard: React.FC<{ icon: React.ReactNode, title: string, description: string }> = ({ icon, title, description }) => (
    <div className="flex items-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600">
            {icon}
        </div>
        <div className="ml-4">
            <h6 className="font-bold text-gray-800">{title}</h6>
            <p className="text-sm text-gray-500">{description}</p>
        </div>
    </div>
);

const DiagramRow: React.FC<{ letter: string, label: string, result: string }> = ({ letter, label, result }) => (
    <div className="grid grid-cols-[auto_1fr_auto_1fr] md:grid-cols-[auto_minmax(0,1fr)_auto_minmax(0,2fr)] items-center gap-x-3 md:gap-x-4">
      <span className="font-extrabold text-3xl text-blue-600">{letter}</span>
      <div className="border border-gray-300 rounded-md px-4 py-2 text-center font-semibold bg-gray-100 text-sm md:text-base">{label}</div>
      <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
      <div className="border border-gray-300 rounded-md px-4 py-2 text-center font-semibold bg-gray-100 text-sm md:text-base">{result}</div>
    </div>
);


const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Our Services</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            We empower stakeholder communities through our specialized flagship programs.
          </p>
        </div>
        
        {/* PIE Program */}
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg border border-gray-100">
            <h3 className="text-sm font-bold uppercase text-blue-600 tracking-widest mb-2">Flagship Program</h3>
            <h4 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-8">College Cluster Program PIE: Policy, Impact, Ecosystem</h4>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                    <h5 className="font-semibold text-lg text-gray-700 mb-4">Program Overview:</h5>
                    <ul className="space-y-3 text-gray-600">
                        <BulletPoint>Designed taking cognizance of UNDP 17 sustainable goals.</BulletPoint>
                        <BulletPoint>Based on the premise of SET – Society, Economy and Technology.</BulletPoint>
                        <BulletPoint>Aims to cluster CIS – Campus, Industry and Society.</BulletPoint>
                        <BulletPoint>Impacts CCS – Campus hiring, Capacity workforce and Social Innovation.</BulletPoint>
                        <BulletPoint>Objective is to implement GTRP to create benchmark in terms of campus hiring and career growth towards campus innovation, social entrepreneurship and Good governance.</BulletPoint>
                        <BulletPoint>Maps each stakeholder's contribution towards GTRP for educational institution.</BulletPoint>
                    </ul>
                </div>
                <div>
                    <h5 className="font-semibold text-lg text-gray-700 mb-4">PIE aims to cluster CIS:</h5>
                     <div className="space-y-4 bg-gray-50 p-6 rounded-lg">
                        <DiagramCard 
                            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path d="M12 14l9-5-9-5-9 5 9 5zm0 0v3.846"></path></svg>}
                            title="Campus"
                            description="Fostering innovation within academic institutions."
                        />
                         <DiagramCard 
                            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>}
                            title="Industry"
                            description="Connecting students and faculty with market leaders."
                        />
                         <DiagramCard 
                            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>}
                            title="Society"
                            description="Driving social innovation and community impact."
                        />
                    </div>
                </div>
            </div>
            <div className="mt-12 border-t pt-8">
                <h5 className="font-semibold text-lg text-gray-700 mb-6 text-center">SMCS Approach for Campus Innovation</h5>
                <div className="max-w-2xl mx-auto space-y-4">
                    <DiagramRow letter="P" label="Policy" result="Leadership Stakeholder" />
                    <DiagramRow letter="I" label="Impact" result="Student Stakeholder" />
                    <DiagramRow letter="E" label="Eco-System" result="SMCS Approach for Campus Innovation" />
                </div>
            </div>
        </div>

        {/* Modules */}
        <div className="mt-20">
            <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Program Modules & Connect</h2>
                <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                    Targeted modules to address specific stakeholder needs within the ecosystem.
                </p>
            </div>

            {/* Leadership Module */}
            <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg border border-gray-100 mb-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h4 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">Leadership Module: Approach to Career Guidance</h4>
                        <div className="space-y-4 text-gray-600 leading-relaxed">
                            <p>SMCS has designed a unique college cluster program, "PIE- Policy Implementation, Eco-system" for educational institutions in India. The first phase, the "Leadership program – Approach to career guidance," addresses leadership stakeholders and policy makers.</p>
                            <p>The program uses a systems approach, viewing the education institution as an eco-system of interdependent stakeholders. Each role is mapped to others, considering its policy impact and contribution to tangible outcomes.</p>
                            <p>We embed UNDP 17 sustainable goals and map to NIRF & NAAC parameters to achieve global benchmarks. The program addresses the skill gap between campus talent and industry demand by applying new technologies and a human-centric approach to create sustainable solutions and guide career choices.</p>
                        </div>
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-xl aspect-w-4 aspect-h-3">
                         <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Leadership and career guidance session" className="w-full h-full object-cover"/>
                    </div>
                </div>
            </div>

             <div className="grid md:grid-cols-2 gap-8 items-stretch">
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 h-full flex flex-col">
                    <h4 className="text-2xl font-bold text-gray-800 mb-4">Student Module: 3w's</h4>
                    <p className="text-gray-600 mb-2 font-semibold">Live Well, Study Well, Work Well.</p>
                    <p className="text-gray-600">A holistic program designed to equip students with essential life and work skills for a balanced and successful career journey.</p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 h-full flex flex-col">
                     <h4 className="text-2xl font-bold text-gray-800 mb-4">Industry Connect</h4>
                     <p className="text-gray-600 mb-4">We bridge the gap between academia and industry through targeted initiatives:</p>
                     <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>Campus Hiring</li>
                        <li>Innovation Push</li>
                     </ul>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
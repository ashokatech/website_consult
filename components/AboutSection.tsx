import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="pr-0 lg:pr-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">About Us</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                SMCS is coming together of an all women professional consultants' team across industries encompassing Science, Technology, Management and Liberal Arts domains.
                </p>
                <p>
                SMCS is incorporated in 2020 head quartered at Bengaluru, Karnataka with a vision to sustain vibrant ecosystems initiating suitable policies and processes to build effective organizational culture and impact.
                </p>
                <p>
                SMCS observed paradigm shift in organizational ideologies impacting business decisions and service delivery. Stakeholder Components of ecosystems like knowledge centres, industry, talent pool, communication platforms and government agencies are under weather trying to match expectations of the new shift.
                </p>
                <p>
                Having done homework on suitable intervention, SMCS takes the pole position with a mission to initiate scale up for all stakeholder participants by offering services to build GTRP (go to reference pivot) for talent pool, corporate, start-up and MSME (Micro, small, medium enterprise) communities.
                </p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
            <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3" alt="A team of professional women collaborating in a modern office" className="w-full h-full object-cover"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
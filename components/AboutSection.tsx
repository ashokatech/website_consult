import React from 'react';

interface TeamMember {
  name: string;
  title: string;
  bio: string;
  avatar: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sarah Chen',
    title: 'Founder & Principal Consultant',
    bio: 'With over 20 years of experience in human resources, Sarah founded Innovate HR to help businesses unlock their potential through their people. She specializes in leadership development and corporate strategy.',
    avatar: 'https://picsum.photos/seed/team1/200/200',
  },
  {
    name: 'Michael Rodriguez',
    title: 'Senior HR Partner',
    bio: 'Michael is an expert in talent acquisition and employee relations. He is passionate about building diverse and inclusive workplaces where every employee can thrive.',
    avatar: 'https://picsum.photos/seed/team2/200/200',
  },
  {
    name: 'Jessica Williams',
    title: 'Compliance & Payroll Specialist',
    bio: 'Jessica ensures our clients navigate the complex world of HR compliance with ease. Her meticulous approach guarantees accuracy and peace of mind.',
    avatar: 'https://picsum.photos/seed/team3/200/200',
  },
];


const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
            <img src="https://picsum.photos/seed/teamwork/600/400" alt="Diverse team collaborating in a modern office" className="w-full h-full object-cover"/>
          </div>
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">About Innovate HR</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Founded on the principle that people are the heart of every successful business, Innovate HR has been dedicated to transforming workplaces since our inception. We believe that strategic, people-centric HR is not just a support function, but a critical driver of growth and innovation.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our mission is to empower organizations to build thriving cultures where employees feel valued, engaged, and motivated. We partner with you to navigate the complexities of HR, ensuring compliance, attracting top talent, and developing your team for long-term success.
            </p>
          </div>
        </div>

        <div className="py-20">
            <div className="text-center max-w-3xl mx-auto">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Philosophy</h3>
                <p className="text-gray-600 leading-relaxed">
                    At Innovate HR, "people-first" is more than a buzzword—it's the core of our methodology. We operate on the belief that when employees are supported, respected, and empowered, they do their best work. This leads to higher productivity, increased innovation, and a stronger bottom line. We integrate this philosophy into every service we offer, from crafting inclusive policies to developing leadership that inspires. We don't just solve HR problems; we build frameworks for sustained success.
                </p>
            </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Meet Our Team</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Our strength lies in our experienced and dedicated professionals.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md text-center transform hover:-translate-y-2 transition-transform duration-300">
              <img src={member.avatar} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg" />
              <h4 className="text-xl font-bold text-gray-800">{member.name}</h4>
              <p className="text-blue-600 font-semibold mb-3">{member.title}</p>
              <p className="text-gray-600 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
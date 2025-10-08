import React from 'react';

interface Activity {
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  link: string;
}

const activities: Activity[] = [
  {
    title: 'Workshop on Sustainable Leadership',
    description: 'We hosted a successful workshop focusing on sustainable leadership practices for emerging industry leaders, fostering a new generation of eco-conscious executives.',
    imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
    date: 'OCT 15, 2023',
    link: '#',
  },
  {
    title: 'Launch of our PIE College Cluster Program',
    description: 'Exciting news! We have officially launched our flagship "PIE: Policy, Impact, Ecosystem" program with three partner colleges in Bengaluru.',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
    date: 'SEP 28, 2023',
    link: '#',
  },
  {
    title: 'SMCS Team at the National Education Summit',
    description: 'Our consultants shared insights on bridging the campus-to-corporate gap at the National Education Summit, receiving accolades for our innovative approach.',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3',
    date: 'AUG 10, 2023',
    link: '#',
  },
];

const ActivityCard: React.FC<{ activity: Activity }> = ({ activity }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group">
    <div className="relative overflow-hidden">
      <img src={activity.imageUrl} alt={activity.title} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" />
      <div className="absolute inset-0 bg-black/20"></div>
    </div>
    <div className="p-6">
      <p className="text-sm text-gray-500 font-medium mb-2">{activity.date}</p>
      <h3 className="text-xl font-bold text-gray-800 mb-3 h-16">{activity.title}</h3>
      <p className="text-gray-600 mb-4 h-24 overflow-hidden">{activity.description}</p>
      <a href={activity.link} className="font-semibold text-blue-600 hover:text-blue-700 group-hover:underline">
        Read More &rarr;
      </a>
    </div>
  </div>
);


const ActivitiesSection: React.FC = () => {
  return (
    <section id="activities" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Latest Activities & Updates</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Stay informed about our latest initiatives, workshops, and community engagements.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {activities.map((activity, index) => (
            <ActivityCard key={index} activity={activity} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;

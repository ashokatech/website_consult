export interface Post {
  title: string;
  description: string;
  content: string;
  imageUrl: string;
  date: string;
  author: string;
}

const STORAGE_KEY = 'smcs_blog_posts';

const defaultPosts: Post[] = [
  {
    title: 'Workshop on Sustainable Leadership',
    description: 'We hosted a successful workshop focusing on sustainable leadership practices for emerging industry leaders, fostering a new generation of eco-conscious executives.',
    content: `
      <p class="mb-4">We hosted a successful workshop focusing on sustainable leadership practices for emerging industry leaders, fostering a new generation of eco-conscious executives. The event brought together experts from various fields to discuss the importance of integrating sustainability into corporate strategy.</p>
      <p class="mb-4">Key topics included circular economy principles, ethical supply chain management, and creating a culture of environmental responsibility. Participants engaged in interactive sessions, case studies, and collaborative problem-solving exercises.</p>
      <h4 class="text-lg font-semibold mb-2 mt-6">Key Takeaways:</h4>
      <ul class="list-disc list-inside mb-4 pl-4">
        <li>The direct link between sustainable practices and long-term profitability.</li>
        <li>Actionable strategies for reducing corporate carbon footprint.</li>
        <li>The role of leadership in driving organizational change towards sustainability.</li>
      </ul>
      <p>We are grateful to all the speakers and attendees for making this a profoundly impactful event. Stay tuned for our upcoming whitepaper summarizing the key insights.</p>
    `,
    imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
    date: 'OCT 15, 2023',
    author: 'Dr. Ananya Sharma',
  },
  {
    title: 'Launch of our PIE College Cluster Program',
    description: 'Exciting news! We have officially launched our flagship "PIE: Policy, Impact, Ecosystem" program with three partner colleges in Bengaluru.',
    content: `
      <p class="mb-4">Exciting news! We have officially launched our flagship "PIE: Policy, Impact, Ecosystem" program with three partner colleges in Bengaluru. This initiative aims to bridge the gap between academia and industry, creating a robust ecosystem for innovation and talent development.</p>
      <p class="mb-4">The PIE program is built on three core pillars: shaping institutional <strong>Policy</strong> to foster innovation, measuring the <strong>Impact</strong> of academic projects on society and industry, and building a collaborative <strong>Ecosystem</strong> of students, faculty, and corporate mentors.</p>
      <p>Our inaugural partners have already begun implementing the initial phase of the program, and we are thrilled by the enthusiastic response from both students and faculty. This marks a significant milestone in our mission to build stories of choice for the next generation of professionals.</p>
    `,
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
    date: 'SEP 28, 2023',
    author: 'Priya Mehta',
  },
  {
    title: 'SMCS Team at the National Education Summit',
    description: 'Our consultants shared insights on bridging the campus-to-corporate gap at the National Education Summit, receiving accolades for our innovative approach.',
    content: `
      <p class="mb-4">Our consultants had the privilege of speaking at the prestigious National Education Summit this year. Our presentation focused on "Bridging the Campus-to-Corporate-Gap: A Systems Approach," where we shared insights from our extensive research and fieldwork.</p>
      <p class="mb-4">We highlighted the critical need for curriculum reform, industry-integrated projects, and the development of soft skills to prepare students for the modern workplace. The session was highly interactive, with a Q&A that sparked a vibrant discussion among educators, policymakers, and industry leaders.</p>
      <p>The feedback was overwhelmingly positive, with many attendees expressing interest in our PIE program as a practical framework for implementing these changes. We are energized by the conversations and new partnerships forged at the summit.</p>
    `,
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3',
    date: 'AUG 10, 2023',
    author: 'Sunita Rao',
  },
];


export const getPosts = (): Post[] => {
  try {
    const postsJson = localStorage.getItem(STORAGE_KEY);
    if (!postsJson) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultPosts));
      return defaultPosts;
    }
    return JSON.parse(postsJson);
  } catch (error) {
    console.error("Failed to parse posts from localStorage", error);
    // If parsing fails, return default posts
    return defaultPosts;
  }
};

export const addPost = (post: Post): Post[] => {
  const posts = getPosts();
  const newPosts = [post, ...posts];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newPosts));
  return newPosts;
};

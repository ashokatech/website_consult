import React, { useState, useEffect } from 'react';
import BlogPostModal from './BlogPostModal';
import { getPosts, Post } from '../services/postService';

const PostCard: React.FC<{ post: Post; onReadMore: () => void }> = ({ post, onReadMore }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group flex flex-col">
    <div className="relative overflow-hidden">
      <img src={post.imageUrl} alt={post.title} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <p className="text-sm text-gray-500 font-medium mb-2">{post.date} &bull; {post.author}</p>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{post.title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{post.description}</p>
      <button onClick={onReadMore} className="font-semibold text-blue-600 hover:text-blue-700 self-start mt-auto">
        Read More &rarr;
      </button>
    </div>
  </div>
);


const ActivitiesSection: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  useEffect(() => {
    setPosts(getPosts());
  }, []);

  return (
    <>
      <section id="blog" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">From Our Blog</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              Stay informed with our latest insights, articles, and company news.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post, index) => (
              <PostCard key={index} post={post} onReadMore={() => setSelectedPost(post)} />
            ))}
          </div>
        </div>
      </section>
      {selectedPost && <BlogPostModal post={selectedPost} onClose={() => setSelectedPost(null)} />}
    </>
  );
};

export default ActivitiesSection;
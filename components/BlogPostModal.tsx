import React, { useEffect } from 'react';

interface Post {
  title: string;
  content: string;
  imageUrl: string;
  date: string;
  author: string;
}

interface BlogPostModalProps {
  post: Post;
  onClose: () => void;
}

const BlogPostModal: React.FC<BlogPostModalProps> = ({ post, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);

    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="blog-post-title"
      style={{ animation: 'fadeIn 0.3s ease-out forwards' }}
    >
      <div 
        className="bg-white rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
        style={{ animation: 'scaleIn 0.3s ease-out forwards' }}
      >
        <div className="relative">
          <img src={post.imageUrl} alt={post.title} className="w-full h-64 object-cover rounded-t-lg" />
           <button 
            onClick={onClose} 
            className="absolute top-4 right-4 bg-white/70 rounded-full p-2 text-gray-800 hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Close post"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
        <div className="p-8 md:p-12">
          <h2 id="blog-post-title" className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{post.title}</h2>
          <div className="text-gray-500 font-medium mb-6">
            <span>{post.date}</span> &bull; <span>By {post.author}</span>
          </div>
          <div 
            className="prose-styles"
            dangerouslySetInnerHTML={{ __html: post.content }}
          >
          </div>
        </div>
      </div>
       <style>{`
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes scaleIn {
            from { transform: scale(0.95); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
        }
        .prose-styles p { margin-bottom: 1rem; color: #374151; line-height: 1.75; }
        .prose-styles h4 { font-size: 1.25rem; font-weight: 600; margin-top: 1.5rem; margin-bottom: 0.5rem; color: #111827; }
        .prose-styles ul { list-style-position: outside; list-style-type: disc; margin-bottom: 1rem; padding-left: 1.5rem; color: #374151;}
        .prose-styles li { margin-bottom: 0.5rem; }
        .prose-styles strong { font-weight: 600; color: #111827; }
      `}</style>
    </div>
  );
};

export default BlogPostModal;

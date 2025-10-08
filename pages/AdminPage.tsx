import React, { useState, useEffect } from 'react';
import { getPosts, addPost, Post } from '../services/postService';

const AUTH_KEY = 'smcs_auth_token';
const MOCK_PASSWORD = 'password';

const AdminPage: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const [posts, setPosts] = useState<Post[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newPost, setNewPost] = useState<Omit<Post, 'date'>>({
    title: '',
    author: '',
    imageUrl: '',
    description: '',
    content: ''
  });

  useEffect(() => {
    const token = localStorage.getItem(AUTH_KEY);
    if (token) {
      setIsLoggedIn(true);
      setPosts(getPosts());
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === MOCK_PASSWORD && email) {
      localStorage.setItem(AUTH_KEY, 'mock_token');
      setIsLoggedIn(true);
      setPosts(getPosts());
      setError('');
    } else {
      setError('Invalid credentials. Hint: use password "password".');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem(AUTH_KEY);
    setIsLoggedIn(false);
  };
  
  const handleAddPost = (e: React.FormEvent) => {
    e.preventDefault();
    const date = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).toUpperCase();
    const postWithDate: Post = { ...newPost, date };
    const updatedPosts = addPost(postWithDate);
    setPosts(updatedPosts);
    setShowAddForm(false);
    setNewPost({ title: '', author: '', imageUrl: '', description: '', content: '' });
  };

  if (!isLoggedIn) {
    return (
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Admin Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
               {error && <p className="text-red-500 text-xs italic">{error}</p>}
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Sign In
              </button>
               <a href="/#home" className="inline-block align-baseline font-bold text-sm text-blue-600 hover:text-blue-800">
                Back to Website
              </a>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
     <div className="bg-gray-50 min-h-screen">
        <header className="bg-white shadow-sm">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold text-gray-800">Admin Dashboard</h1>
                <div>
                    <a href="/#blog" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline mr-6">View Site</a>
                    <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded text-sm">
                        Logout
                    </button>
                </div>
            </div>
        </header>
        <main className="container mx-auto px-6 py-8">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-700">Blog Posts</h2>
                <button onClick={() => setShowAddForm(!showAddForm)} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                    {showAddForm ? 'Cancel' : 'Add New Post'}
                </button>
            </div>
            
            {showAddForm && (
                <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                    <h3 className="text-xl font-semibold mb-4">Create New Post</h3>
                    <form onSubmit={handleAddPost}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <input type="text" placeholder="Title" value={newPost.title} onChange={e => setNewPost({...newPost, title: e.target.value})} className="border p-2 rounded w-full" required />
                            <input type="text" placeholder="Author" value={newPost.author} onChange={e => setNewPost({...newPost, author: e.target.value})} className="border p-2 rounded w-full" required />
                        </div>
                        <input type="text" placeholder="Image URL" value={newPost.imageUrl} onChange={e => setNewPost({...newPost, imageUrl: e.target.value})} className="border p-2 rounded w-full mb-4" required />
                        <textarea placeholder="Description (for card preview)" value={newPost.description} onChange={e => setNewPost({...newPost, description: e.target.value})} className="border p-2 rounded w-full mb-4" rows={3} required />
                        <textarea placeholder="Content (HTML allowed)" value={newPost.content} onChange={e => setNewPost({...newPost, content: e.target.value})} className="border p-2 rounded w-full mb-4" rows={8} required />
                        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save Post</button>
                    </form>
                </div>
            )}

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <table className="min-w-full">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="text-left py-3 px-4 font-semibold text-sm">Title</th>
                            <th className="text-left py-3 px-4 font-semibold text-sm">Author</th>
                            <th className="text-left py-3 px-4 font-semibold text-sm">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post, index) => (
                            <tr key={index} className="border-b">
                                <td className="py-3 px-4">{post.title}</td>
                                <td className="py-3 px-4 text-gray-600">{post.author}</td>
                                <td className="py-3 px-4 text-gray-600">{post.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    </div>
  );
};

export default AdminPage;

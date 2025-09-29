import React, { useEffect } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      // Handle smooth scroll for on-page hash links that don't open in a new tab
      if (anchor && anchor.hash && anchor.target !== '_blank' && !e.metaKey && !e.ctrlKey && !e.shiftKey) {
        try {
          const url = new URL(anchor.href);
          if (url.origin === window.location.origin && url.pathname === window.location.pathname) {
            e.preventDefault();
            const targetId = url.hash.substring(1);
            const element = document.getElementById(targetId);
            element?.scrollIntoView({ behavior: 'smooth' });
          }
        } catch (err) {
          // A malformed URL might throw an error. Ignore it.
          console.error(err);
        }
      }
    };
    
    document.addEventListener('click', handleLinkClick);

    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  return (
    <div className="bg-white">
      <Header />
      <main>
        <HomePage />
      </main>
      <Footer />
    </div>
  );
};

export default App;

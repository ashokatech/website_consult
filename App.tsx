import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import AdminPage from './pages/AdminPage';

const App: React.FC = () => {
  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.target !== '_blank' && !e.metaKey && !e.ctrlKey && !e.shiftKey) {
        try {
          const url = new URL(anchor.href);
           if (url.pathname === window.location.pathname && url.origin === window.location.origin) {
            // This is an on-page link.
            // If it's a link to an admin route, let the router handle it.
            if (url.hash.startsWith('#/')) {
              return;
            }
            // Otherwise, smooth scroll.
            e.preventDefault();
            const targetId = url.hash.substring(1);
            const element = document.getElementById(targetId);
            element?.scrollIntoView({ behavior: 'smooth' });
          }
        } catch (err) {
          console.error(err);
        }
      }
    };

    const handleHashChange = () => {
      setRoute(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    document.addEventListener('click', handleLinkClick);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  const renderPage = () => {
    if (route.startsWith('#/admin')) {
      return <AdminPage />;
    }
    return (
      <>
        <Header />
        <main>
          <HomePage />
        </main>
        <Footer />
      </>
    );
  };

  return (
    <div className="bg-white">
      {renderPage()}
    </div>
  );
};

export default App;
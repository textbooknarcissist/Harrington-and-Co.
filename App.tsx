import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PracticeAreasPage from './pages/PracticeAreasPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import BackToTop from './components/BackToTop';
import Newsletter from './components/Newsletter';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#/');
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPath) {
      case '#/':
        return <HomePage />;
      case '#/about':
        return <AboutPage />;
      case '#/practice':
        return <PracticeAreasPage />;
      case '#/blog':
        return <BlogPage />;
      case '#/contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F7F5F0]">
      <Navbar currentPath={currentPath} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Newsletter />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default App;
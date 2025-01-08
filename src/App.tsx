import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import News from './pages/News';
import Reviews from './pages/Reviews';
import Compare from './pages/Compare';
import Profile from './pages/Profile';
import ArticlePage from './pages/ArticlePage';
import CustomCursor from './components/CustomCursor';
import TourProvider from './components/TourProvider';
import './styles/cursor.css';
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 571);
    };

    // Set initial screen size
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isSmallScreen) {
    return (
      <>
        <Analytics /> {/* Analytics for small screen */}
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
          <p>This app is only available on devices wider than 571px as its still in development phase.</p>
        </div>
      </>
    );
  }

  return (
    <Router>
      <Analytics /> {/* Analytics for the main app */}
      <TourProvider>
        <div className="min-h-screen bg-gray-900 flex flex-col">
          <CustomCursor />
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/news" element={<News />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/compare" element={<Compare />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/article/:id" element={<ArticlePage />} />
            </Routes>
          </AnimatePresence>
          <footer className="bg-gray-800 text-center text-white py-4 mt-auto">
            Made with ❤️ by Sohel Datta &copy; 2025
          </footer>
        </div>
      </TourProvider>
    </Router>
  );
}

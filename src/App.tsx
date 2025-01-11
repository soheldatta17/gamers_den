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
import axios from 'axios';
import { Game } from './Game';

// Define the structure of the Game object
export default function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [allGames, setAllGames] = useState<Game[]>([]);
  const [news, setNews] = useState<Game[]>([]);

  // Fetch games when the component mounts
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 571);
    };

    // Set initial screen size
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Fetch games data
    axios.get<Game[]>('https://gamers-den-backend.vercel.app/all_games')
      .then(response => {
        setAllGames(response.data); // Set the state with fetched games
      })
      .catch(err => {
        console.error('Error fetching games:', err);
      });

    axios.get<Game[]>('https://gamers-den-backend.vercel.app/news')
      .then(response => {
        setNews(response.data); // Set the state with fetched games
      })
      .catch(err => {
        console.error('Error fetching games:', err);
      });

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
          <p>This app is only available on devices wider than 571px as it's still in development phase.</p>
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
              <Route path="/" element={<Home allGames={allGames} setAllGames={setAllGames} news={news} setNews={setNews} />} />
              <Route path="/news" element={<News news={news} setNews={setNews}/>} />
              <Route path="/reviews" element={<Reviews allGames={allGames} setAllGames={setAllGames} />} />
              <Route path="/compare" element={<Compare allGames={allGames} setAllGames={setAllGames} />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/article/:id" element={<ArticlePage allGames={allGames} setAllGames={setAllGames} />} />
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

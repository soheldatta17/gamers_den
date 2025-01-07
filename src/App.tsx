import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import News from './pages/News';
import Reviews from './pages/Reviews';
import Profile from './pages/Profile';
import ArticlePage from './pages/ArticlePage';
import CustomCursor from './components/CustomCursor';
import TourProvider from './components/TourProvider';
import './styles/cursor.css';

export default function App() {
  return (
    <Router>
      <TourProvider>
        <div className="min-h-screen bg-gray-900">
          <CustomCursor />
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/news" element={<News />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/article/:id" element={<ArticlePage />} />
            </Routes>
          </AnimatePresence>
        </div>
      </TourProvider>
    </Router>
  );
}
import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import GameSlider from '../components/GameSlider';
import ArticleCard from '../components/ArticleCard';
import NewsCard from '../components/NewsCard';
import { Game } from '../Game';

interface HomeProps {
  allGames: Game[];
  setAllGames: React.Dispatch<React.SetStateAction<Game[]>>;
  news: Game[];
  setNews: React.Dispatch<React.SetStateAction<Game[]>>;
}

const Home: React.FC<HomeProps> = ({ allGames, setAllGames, news, setNews }) => {
  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <HeroSection />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 upcoming-games"
        >
          <h2
            style={{
              color: '#ffffff', // White text color
              textShadow: '0 0 5px #ffffff, 0 0 10px #ff80bf, 0 0 20px #ff4da6, 0 0 40px #ff1a8c',
              fontFamily: 'Poppins, sans-serif',
              textAlign: 'center',
              letterSpacing: '2px',
              marginBottom: '2rem',
              fontSize: '2.5rem',
            }}
          >
            Upcoming Games
          </h2>
          <GameSlider />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="featured-articles"
        >
          <h2
            style={{
              color: '#0ff',
              textShadow: '0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff, 0 0 40px #0ff, 0 0 80px #0ff',
              fontFamily: 'Poppins, sans-serif',
              textAlign: 'center',
              letterSpacing: '2px',
              marginBottom: '2rem',
              fontSize: '2.5rem',
            }}
          >
            Featured Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allGames.slice(0, 3).map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ArticleCard {...article} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Add space here */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="featured-articles mt-16"
        >
          <h2
            style={{
              color: '#ff007f',
              textShadow: '0 0 5px #ff007f, 0 0 10px #ff007f, 0 0 20px #ff007f, 0 0 40px #ff007f, 0 0 80px #ff007f',
              fontFamily: 'Poppins, sans-serif',
              textAlign: 'center',
              letterSpacing: '2px',
              marginBottom: '2rem',
              fontSize: '2.5rem',
            }}
          >
            Featured News
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.slice(0, 3).map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <NewsCard {...article} />
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Home;
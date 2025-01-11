import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import NewsCard from '../components/NewsCard';
import { Game } from '../Game';

interface NewsProps {
  news: Game[];
  setNews: React.Dispatch<React.SetStateAction<Game[]>>;
}

const News: React.FC<NewsProps> = ({ news, setNews }) => {

  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <PageHeader
        title="Latest Gaming News"
        subtitle="Stay updated with the latest happenings in the gaming world"
        image="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <NewsCard {...article} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
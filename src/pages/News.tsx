import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import ArticleCard from '../components/ArticleCard';

const newsArticles = [
  {
    title: "PlayStation 6 Development Confirmed by Sony",
    excerpt: "Sony executives hint at groundbreaking features for their next-generation console, promising a revolutionary gaming experience.",
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    date: "2 hours ago",
    likes: 2453,
    category: "Hardware"
  },
  {
    title: "Major Update Coming to Cyberpunk 2077",
    excerpt: "CD Projekt Red announces a massive update bringing new storylines, features, and improvements to Night City.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    date: "5 hours ago",
    likes: 1876,
    category: "Updates"
  },
  {
    title: "Indie Game Takes Steam by Storm",
    excerpt: "A small development team's passion project becomes an overnight sensation, breaking sales records.",
    image: "https://images.unsplash.com/photo-1556438064-2d7646166914?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    date: "1 day ago",
    likes: 943,
    category: "Indie"
  }
];

const News = () => {
  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <PageHeader
        title="Latest Gaming News"
        subtitle="Stay updated with the latest happenings in the gaming world"
        image="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ArticleCard {...article} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
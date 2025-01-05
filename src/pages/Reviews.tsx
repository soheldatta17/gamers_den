import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import ArticleCard from '../components/ArticleCard';
import ReviewScore from '../components/ReviewScore';

const reviews = [
  {
    title: "Elden Ring: The Definitive Souls Experience",
    excerpt: "FromSoftware's latest masterpiece sets a new standard for open-world action RPGs with its stunning world design and challenging combat.",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    date: "3 days ago",
    likes: 3241,
    category: "Review",
    score: 9.5
  },
  {
    title: "Final Fantasy XVI Review",
    excerpt: "Square Enix delivers a darker, more mature take on the franchise with impressive combat mechanics and stunning visuals.",
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    date: "1 week ago",
    likes: 2187,
    category: "Review",
    score: 8.8
  },
  {
    title: "Baldur's Gate 3: A New RPG Classic",
    excerpt: "Larian Studios crafts an incredible RPG that sets new standards for player choice and consequence in gaming.",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    date: "2 weeks ago",
    likes: 4521,
    category: "Review",
    score: 9.8
  }
];

const Reviews = () => {
  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <PageHeader
        title="Game Reviews"
        subtitle="In-depth analysis of the latest and greatest games"
        image="https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg overflow-hidden border border-cyan-500/20"
            >
              <img
                src={review.image}
                alt={review.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white">{review.title}</h3>
                  <ReviewScore score={review.score} />
                </div>
                <p className="text-gray-300 mb-4">{review.excerpt}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-cyan-500 text-white px-6 py-2 rounded-full hover:bg-cyan-600 transition-colors"
                >
                  Read Full Review
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
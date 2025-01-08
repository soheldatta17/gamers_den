import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import ReviewScore from '../components/ReviewScore';
import { allgames } from '../data/articles';


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
          {allgames.map((review) => (
            <Link to={`/article/${review.id}`} key={review.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gray-800 rounded-lg overflow-hidden border border-cyan-500/20 hover:border-cyan-500/50 transition-colors"
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
                  <div className="flex justify-between items-center text-sm text-gray-400">
                    <span>{review.date}</span>
                    <span>{review.category}</span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
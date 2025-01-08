import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, ThumbsUp, Tag, GitCompare } from 'lucide-react';
import { articles } from '../data/articles';
import DiscussionSection from '../components/DiscussionSection';

export default function ArticlePage() {
  const { id } = useParams();
  const article = articles.find(a => a.id === id);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gray-900 pt-24 pb-16"
    >
      <div className="max-w-4xl mx-auto px-4">
        <Link 
          to="/" 
          className="inline-flex items-center text-cyan-500 hover:text-cyan-400 mb-8"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Home
        </Link>

        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          className="bg-gray-800 rounded-lg overflow-hidden border border-cyan-500/20"
        >
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-[400px] object-cover"
          />
          
          <div className="p-8">
            <div className="flex items-center space-x-4 mb-6">
              <span className="px-3 py-1 bg-cyan-500/90 text-white text-sm rounded-full">
                {article.category}
              </span>
              <div className="flex items-center text-gray-400">
                <Clock size={16} className="mr-2" />
                {article.readTime}
              </div>
              <div className="flex items-center text-gray-400">
                <Calendar size={16} className="mr-2" />
                {article.date}
              </div>
              <div className="flex items-center text-gray-400">
                <ThumbsUp size={16} className="mr-2" />
                {article.likes}
              </div>
            </div>

            <h1 className="text-4xl font-bold text-white mb-6">{article.title}</h1>
            
            {article.author && (
              <div className="flex items-center space-x-4 mb-8">
                <img 
                  src={article.author.avatar} 
                  alt={article.author.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="text-white font-medium">{article.author.name}</div>
                  <div className="text-gray-400">Author</div>
                </div>
              </div>
            )}

            {/* Keywords */}
            {article.keywords && (
              <div className="flex items-center space-x-2 mb-6">
                <Tag size={16} className="text-cyan-500" />
                <div className="flex flex-wrap gap-2">
                  {article.keywords.map((keyword, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Similar Games */}
            {article.comparisons && (
              <div className="flex items-center space-x-2 mb-8">
                <GitCompare size={16} className="text-cyan-500" />
                <div className="flex flex-wrap gap-2">
                  {article.comparisons.map((game, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full"
                    >
                      {game}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="prose prose-invert max-w-none">
              {article.content.split('\n').map((paragraph, index) => (
                <p key={index} className="text-gray-300 mb-4">{paragraph}</p>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Discussion Section */}
        {article.discussions && (
          <DiscussionSection discussions={article.discussions} />
        )}
      </div>
    </motion.div>
  );
}
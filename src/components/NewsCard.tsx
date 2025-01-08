import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ThumbsUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Article } from '../types/article';

interface NewsCardProps extends Article {
    compact?: boolean;
}

const NewsCard: React.FC<NewsCardProps> = ({
    title,
    excerpt,
    image,
    date,
    likes,
    category,
    compact = false,
}) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className={`bg-gray-800 rounded-lg overflow-hidden border border-cyan-500/20 hover:border-cyan-500/50 transition-colors ${compact ? 'h-[300px]' : ''
                }`}
        >
            <div className="relative">
                <img
                    src={image}
                    alt={title}
                    className={`w-full ${compact ? 'h-32' : 'h-48'} object-cover`}
                />
                <div className="absolute top-2 right-2">
                    <span className="px-3 py-1 bg-cyan-500/90 text-white text-sm rounded-full">
                        {category}
                    </span>
                </div>
            </div>

            <div className="p-4">
                <h3 className={`font-bold text-white mb-2 line-clamp-2 ${compact ? 'text-lg' : 'text-xl'
                    }`}>
                    {title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-2 text-sm">
                    {excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center space-x-2">
                        <Clock size={16} />
                        <span>{date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <ThumbsUp size={16} />
                        <span>{likes}</span>
                    </div>
                </div>
            </div>
        </motion.div>

    );
};

export default NewsCard;
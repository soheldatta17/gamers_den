import React from 'react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  image: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, image }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative h-[40vh] flex items-center justify-center"
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
      </div>
      
      <div className="relative text-center px-4">
        <motion.h1 
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4 neon-text"
        >
          {title}
        </motion.h1>
        <motion.p 
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-300 max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default PageHeader;
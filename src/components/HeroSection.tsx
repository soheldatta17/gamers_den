import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative h-[60vh] flex items-center justify-center"
    >
      <div className="absolute inset-0 overflow-hidden">
        {/* <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-50"
        > */}
          <img src="https://i.makeagif.com/media/10-16-2022/77b9U2.gif" className="w-full h-full object-cover opacity-50" />
        {/* </video> */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
      </div>
      
      <div className="relative text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6"
        >
          <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-transparent bg-clip-text">
            Next-Gen Gaming
          </span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-gray-300 max-w-2xl mx-auto"
        >
          Your source for the latest gaming news, reviews, and cutting-edge technology
        </motion.p>
      </div>
    </motion.div>
  );
};

export default HeroSection;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GamepadIcon, NewspaperIcon, TrendingUpIcon, UserIcon, GitCompareIcon } from 'lucide-react';

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen((prevState) => !prevState);
  };

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm border-b border-cyan-500/20 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 logo">
            <motion.div whileHover={{ scale: 1.1 }} className="text-cyan-500">
              <GamepadIcon size={32} />
            </motion.div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-purple-500 text-transparent bg-clip-text">
              GamersDen
            </span>
          </Link>

          <div className="lg:hidden flex items-center">
            <button onClick={toggleMobileNav} className="text-white">
              <span className="text-2xl">☰</span>
            </button>
          </div>

          <div className="hidden lg:flex space-x-8">
            <motion.div whileHover={{ y: -2 }} className="relative group news-link">
              <Link to="/news" className="flex flex-col items-center text-gray-300 hover:text-cyan-400 transition-colors">
                <NewspaperIcon size={20} />
                <span className="text-sm mt-1">News</span>
                <motion.div
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-cyan-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform"
                  initial={false}
                />
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ y: -2 }} className="relative group reviews-link">
              <Link to="/reviews" className="flex flex-col items-center text-gray-300 hover:text-cyan-400 transition-colors">
                <TrendingUpIcon size={20} />
                <span className="text-sm mt-1">Reviews</span>
                <motion.div
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-cyan-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform"
                  initial={false}
                />
              </Link>
            </motion.div>

            <motion.div whileHover={{ y: -2 }} className="relative group compare-link">
              <Link to="/compare" className="flex flex-col items-center text-gray-300 hover:text-cyan-400 transition-colors">
                <GitCompareIcon size={20} />
                <span className="text-sm mt-1">Compare</span>
                <motion.div
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-cyan-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform"
                  initial={false}
                />
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ y: -2 }} className="relative group profile-link">
              <Link to="/profile" className="flex flex-col items-center text-gray-300 hover:text-cyan-400 transition-colors">
                <UserIcon size={20} />
                <span className="text-sm mt-1">Profile</span>
                <motion.div
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-cyan-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform"
                  initial={false}
                />
              </Link>
            </motion.div>
          </div>
        </div>

        <div className={`lg:hidden ${isMobileNavOpen ? 'block' : 'hidden'} mt-4`}>
          <div className="flex flex-col space-y-4 text-gray-300">
            <Link to="/news" className="flex items-center space-x-2 hover:text-cyan-400 transition-colors">
              <NewspaperIcon size={20} />
              <span className="text-lg">News</span>
            </Link>
            <Link to="/reviews" className="flex items-center space-x-2 hover:text-cyan-400 transition-colors">
              <TrendingUpIcon size={20} />
              <span className="text-lg">Reviews</span>
            </Link>
            <Link to="/compare" className="flex items-center space-x-2 hover:text-cyan-400 transition-colors">
              <GitCompareIcon size={20} />
              <span className="text-lg">Compare</span>
            </Link>
            <Link to="/profile" className="flex items-center space-x-2 hover:text-cyan-400 transition-colors">
              <UserIcon size={20} />
              <span className="text-lg">Profile</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
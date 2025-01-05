import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GamepadIcon, NewspaperIcon, TrendingUpIcon, UserIcon } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm border-b border-cyan-500/20 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="text-cyan-500"
            >
              <GamepadIcon size={32} />
            </motion.div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-purple-500 text-transparent bg-clip-text">
              NeoGamer
            </span>
          </Link>
          
          <div className="flex space-x-8">
            {[
              { to: '/news', icon: NewspaperIcon, text: 'News' },
              { to: '/reviews', icon: TrendingUpIcon, text: 'Reviews' },
              { to: '/profile', icon: UserIcon, text: 'Profile' },
            ].map((item) => (
              <motion.div
                key={item.to}
                whileHover={{ y: -2 }}
                className="relative group"
              >
                <Link
                  to={item.to}
                  className="flex flex-col items-center text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  <item.icon size={20} />
                  <span className="text-sm mt-1">{item.text}</span>
                  <motion.div
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-cyan-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform"
                    initial={false}
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
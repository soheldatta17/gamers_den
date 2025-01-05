import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Edit2 } from 'lucide-react';
import ProfileStats from '../components/ProfileStats';

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-900 pt-24">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800 rounded-lg p-6 mb-8 border border-cyan-500/20"
        >
          <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-6">
            <div className="relative mb-4 sm:mb-0">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWNHwhOm1_qRRtxe1XUXdsNXjLttcRkv-fdA&s"
                alt="Profile"
                className="w-24 h-24 rounded-full border-2 border-cyan-500"
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="absolute bottom-0 right-0 bg-cyan-500 p-2 rounded-full text-white"
              >
                <Edit2 size={16} />
              </motion.button>
            </div>
            
            <div className="flex-1 text-center sm:text-left">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-2xl font-bold text-white mb-1">Sohel Datta</h1>
                  <p className="text-gray-400">Joined January 2025</p>
                </div>
                {/* Hide Edit Profile button on small screens */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="hidden sm:flex items-center space-x-2 bg-gray-700 px-4 py-2 rounded-full hover:bg-gray-600 transition-colors"
                >
                  <Settings size={18} />
                  <span>Edit Profile</span>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-xl font-bold text-white mb-4">Your Activity</h2>
          <ProfileStats />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="bg-gray-800 rounded-lg p-6 border border-cyan-500/20">
            <h2 className="text-xl font-bold text-white mb-4">Recent Activity</h2>
            <div className="space-y-4">
              <div className="flex items-center text-gray-300">
                <span className="font-bold mr-2">128</span> <span>Comments</span> on "Elden Ring Review"
              </div>
              <div className="flex items-center text-gray-300">
                <span className="font-bold mr-2">432</span> <span>Likes</span> on "PlayStation 6 News"
              </div>
              <div className="flex items-center text-gray-300">
                <span className="font-bold mr-2">25</span> <span>Shares</span> "Cyberpunk 2077 Update"
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-cyan-500/20">
            <h2 className="text-xl font-bold text-white mb-4">Saved Articles</h2>
            <div className="space-y-4">
              <div className="flex items-center text-gray-300">
                <span className="font-bold mr-2">5</span> Final Fantasy XVI Review
              </div>
              <div className="flex items-center text-gray-300">
                <span className="font-bold mr-2">3</span> E3 2024 Preview
              </div>
              <div className="flex items-center text-gray-300">
                <span className="font-bold mr-2">2</span> Ray Tracing Guide
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;

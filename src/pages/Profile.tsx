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
          <div className="flex items-center space-x-6">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
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
            
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-2xl font-bold text-white mb-1">Alex Gaming</h1>
                  <p className="text-gray-400">Joined March 2024</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2 bg-gray-700 px-4 py-2 rounded-full hover:bg-gray-600 transition-colors"
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
              <div className="text-gray-300">Commented on "Elden Ring Review"</div>
              <div className="text-gray-300">Liked "PlayStation 6 News"</div>
              <div className="text-gray-300">Shared "Cyberpunk 2077 Update"</div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-cyan-500/20">
            <h2 className="text-xl font-bold text-white mb-4">Saved Articles</h2>
            <div className="space-y-4">
              <div className="text-gray-300">Final Fantasy XVI Review</div>
              <div className="text-gray-300">E3 2024 Preview</div>
              <div className="text-gray-300">Ray Tracing Guide</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
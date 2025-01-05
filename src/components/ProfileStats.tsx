import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ThumbsUp, BookOpen } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  label: string;
  value: number;
}

const StatItem: React.FC<StatItemProps> = ({ icon, label, value }) => (
  <motion.div 
    whileHover={{ scale: 1.05 }}
    className="flex items-center space-x-3 bg-gray-800 p-4 rounded-lg border border-cyan-500/20"
  >
    <div className="text-cyan-500">{icon}</div>
    <div>
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  </motion.div>
);

const ProfileStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <StatItem icon={<MessageSquare size={24} />} label="Comments" value={128} />
      <StatItem icon={<ThumbsUp size={24} />} label="Likes Given" value={432} />
      <StatItem icon={<BookOpen size={24} />} label="Articles Read" value={89} />
    </div>
  );
};

export default ProfileStats;
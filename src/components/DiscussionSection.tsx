import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ThumbsUp, Reply } from 'lucide-react';

interface Discussion {
  id: number;
  user: string;
  avatar: string;
  comment: string;
  likes: number;
  replies: number;
  date: string;
}

interface DiscussionSectionProps {
  discussions: Discussion[];
}

const DiscussionSection: React.FC<DiscussionSectionProps> = ({ discussions }) => {
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle comment submission
    setNewComment('');
  };

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-white mb-6">Discussion</h2>
      
      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex flex-col space-y-4">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Join the discussion..."
            className="w-full p-4 bg-gray-800 border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
            rows={4}
          />
          <button
            type="submit"
            className="self-end px-6 py-2 bg-cyan-500 text-white rounded-full hover:bg-cyan-600 transition-colors"
          >
            Post Comment
          </button>
        </div>
      </form>

      {/* Discussion List */}
      <div className="space-y-6">
        {discussions.map((discussion) => (
          <motion.div
            key={discussion.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-800 rounded-lg p-6 border border-cyan-500/20"
          >
            <div className="flex items-start space-x-4">
              <img
                src={discussion.avatar}
                alt={discussion.user}
                className="w-12 h-12 rounded-full"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-white">{discussion.user}</h3>
                  <span className="text-sm text-gray-400">{discussion.date}</span>
                </div>
                <p className="text-gray-300 mb-4">{discussion.comment}</p>
                <div className="flex items-center space-x-6 text-sm text-gray-400">
                  <button className="flex items-center space-x-2 hover:text-cyan-500 transition-colors">
                    <ThumbsUp size={16} />
                    <span>{discussion.likes}</span>
                  </button>
                  <button className="flex items-center space-x-2 hover:text-cyan-500 transition-colors">
                    <Reply size={16} />
                    <span>{discussion.replies} replies</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DiscussionSection;
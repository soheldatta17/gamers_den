import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { allgames } from '../data/articles';
import PageHeader from '../components/PageHeader';

const Compare = () => {
  const [selectedGames, setSelectedGames] = useState<string[]>([]);

  const handleGameSelect = (gameId: string) => {
    if (selectedGames.includes(gameId)) {
      setSelectedGames(selectedGames.filter(id => id !== gameId));
    } else if (selectedGames.length < 2) {
      setSelectedGames([...selectedGames, gameId]);
    }
  };

  const selectedGameDetails = allgames.filter(game => selectedGames.includes(game.id));

  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <PageHeader
        title="Compare Games"
        subtitle="Compare features, requirements, and ratings side by side"
        image="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Game Selection */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {allgames.map((game) => (
            <motion.button
              key={game.id}
              whileHover={{ scale: 1.05 }}
              onClick={() => handleGameSelect(game.id)}
              className={`p-4 rounded-lg border ${
                selectedGames.includes(game.id)
                  ? 'border-cyan-500 bg-cyan-500/20'
                  : 'border-gray-700 bg-gray-800'
              }`}
            >
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-32 object-cover rounded-lg mb-2"
              />
              <h3 className="text-white font-semibold">{game.title}</h3>
            </motion.button>
          ))}
        </div>

        {/* Comparison Table */}
        {selectedGameDetails.length === 2 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-800 rounded-lg border border-cyan-500/20 overflow-hidden"
          >
            <div className="grid grid-cols-3 gap-4 p-6">
              <div className="col-span-1"></div>
              {selectedGameDetails.map((game) => (
                <div key={game.id} className="text-center">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-bold text-white mb-2">{game.title}</h3>
                </div>
              ))}

              {/* Categories */}
              <div className="col-span-1 font-semibold text-white">Genre</div>
              {selectedGameDetails.map((game) => (
                <div key={game.id} className="text-gray-300">{game.category}</div>
              ))}

              <div className="col-span-1 font-semibold text-white">Keywords</div>
              {selectedGameDetails.map((game) => (
                <div key={game.id} className="flex flex-wrap gap-2">
                  {game.keywords.map((keyword, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-700 text-gray-300 text-sm rounded-full"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              ))}

              <div className="col-span-1 font-semibold text-white">Similar Games</div>
              {selectedGameDetails.map((game) => (
                <div key={game.id} className="flex flex-wrap gap-2">
                  {game.comparisons.map((comparison, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-700 text-gray-300 text-sm rounded-full"
                    >
                      {comparison}
                    </span>
                  ))}
                </div>
              ))}

              <div className="col-span-1 font-semibold text-white">Release Date</div>
              {selectedGameDetails.map((game) => (
                <div key={game.id} className="text-gray-300">{game.date}</div>
              ))}

              <div className="col-span-1 font-semibold text-white">Community Rating</div>
              {selectedGameDetails.map((game) => (
                <div key={game.id} className="text-gray-300">{game.likes} likes</div>
              ))}

              {/* Minimum Requirements */}
              <div className="col-span-1 font-semibold text-white">Minimum Requirements</div>
              {selectedGameDetails.map((game) => (
                <div key={game.id} className="text-gray-300">
                  <ul>
                    <li><strong>OS:</strong> {game.requirements.minimum.os}</li>
                    <li><strong>CPU:</strong> {game.requirements.minimum.cpu}</li>
                    <li><strong>RAM:</strong> {game.requirements.minimum.ram}</li>
                    <li><strong>GPU:</strong> {game.requirements.minimum.gpu}</li>
                    <li><strong>Storage:</strong> {game.requirements.minimum.storage}</li>
                  </ul>
                </div>
              ))}

              {/* Recommended Requirements */}
              <div className="col-span-1 font-semibold text-white">Recommended Requirements</div>
              {selectedGameDetails.map((game) => (
                <div key={game.id} className="text-gray-300">
                  <ul>
                    <li><strong>OS:</strong> {game.requirements.recommended.os}</li>
                    <li><strong>CPU:</strong> {game.requirements.recommended.cpu}</li>
                    <li><strong>RAM:</strong> {game.requirements.recommended.ram}</li>
                    <li><strong>GPU:</strong> {game.requirements.recommended.gpu}</li>
                    <li><strong>Storage:</strong> {game.requirements.recommended.storage}</li>
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Compare;

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const upcomingGames = [
  {
    title: "Star Wars: Outlaws",
    image: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    release: "2024",
    description: "Open-world Star Wars adventure"
  },
  {
    title: "Final Fantasy VII Rebirth",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    release: "2024",
    description: "The next chapter in the FF7 saga"
  },
  {
    title: "Dragon's Dogma 2",
    image: "https://images.unsplash.com/photo-1548484352-ea579e93aa8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    release: "March 2024",
    description: "Epic fantasy RPG returns"
  }
];

const GameSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % upcomingGames.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          className="absolute inset-0"
        >
          <div className="relative h-full">
            <img
              src={upcomingGames[current].image}
              alt={upcomingGames[current].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="text-3xl font-bold text-white mb-2 neon-text">
                {upcomingGames[current].title}
              </h3>
              <p className="text-cyan-400 mb-2">Release: {upcomingGames[current].release}</p>
              <p className="text-gray-300">{upcomingGames[current].description}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={() => setCurrent((prev) => (prev - 1 + upcomingGames.length) % upcomingGames.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % upcomingGames.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default GameSlider;
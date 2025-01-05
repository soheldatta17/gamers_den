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
        <img src="https://i.makeagif.com/media/10-16-2022/77b9U2.gif" className="w-full h-full object-cover opacity-50" />

        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
      </div>

      <div className="relative text-center px-4">
      <motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2 }}
  className="text-5xl md:text-7xl font-bold text-white mb-6"
  style={{
    fontFamily: "'Press Start 2P', sans-serif",
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Centers the content horizontally
    justifyContent: 'center', // Centers content vertically (if necessary)
  }}
>
  <a href="https://www.fontspace.com/category/gaming">
    <img
      src="https://see.fontimg.com/api/rf5/w16n8/NzZlMTAyNDg0YzM5NGVhMjk4ZTEyMTBiNTU1YTRmZjQub3Rm/R2FtZXJzIGRlbg/knight-warrior.png?r=fs&h=49&w=1250&fg=221ED5&bg=1E86D0&tb=1&s=39"
      alt="Gaming fonts"
      style={{ display: 'block', margin: '0 auto' }} // Centers the image horizontally
    />
  </a>
</motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-gray-300 max-w-2xl mx-auto"
          style={{ display: 'inline-block', whiteSpace: 'normal' }}
        >
          {'Your source for the latest gaming news & reviews'
            .split('')
            .map((char, i) => (
              char === ' ' ? (
                <span key={i} style={{ display: 'inline-block', width: '0.5em' }} />
              ) : (
                <motion.span
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: 0.4 + i * 0.05,
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                  style={{
                    display: 'inline-block',
                    background: 'linear-gradient(to right, red, yellow, green)',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  {char}
                </motion.span>
              )
            ))}
        </motion.p>

      </div>
    </motion.div>
  );
};

export default HeroSection;
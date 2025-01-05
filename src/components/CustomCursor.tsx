import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsPointer((e.target as HTMLElement)?.matches?.('button, a, [role="button"]') ?? false);
    };

    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <>
      <motion.div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        animate={{ x: position.x - 8, y: position.y - 8 }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="cyan">
          <circle cx="16" cy="16" r="8" strokeWidth="2" />
          <line x1="16" y1="0" x2="16" y2="32" strokeWidth="1" />
          <line x1="0" y1="16" x2="32" y2="16" strokeWidth="1" />
        </svg>
      </motion.div>
      {isPointer && (
        <motion.div
          className="fixed pointer-events-none z-50"
          animate={{ x: position.x - 24, y: position.y - 24 }}
          transition={{ type: "spring", stiffness: 250, damping: 20 }}
        >
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="cyan">
            <circle cx="32" cy="32" r="16" strokeWidth="1" strokeDasharray="4 4" />
          </svg>
        </motion.div>
      )}
    </>
  );
};

export default CustomCursor;
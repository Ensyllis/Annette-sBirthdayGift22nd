'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const reasons = [
  "I can always share my funny STEM memes with you",
  "I don't have to pretend when I'm with you",
  "I can share with you the most mundane things and that makes me smile",
  "With most people I have to choose to be serious or goofy, and with you I can choose both.",
  "We can both be in a call humming to songs and I wouldn't want it any different",
  "I know sometimes I can be clingy, but at the end of the day you're always there for me",
  "I'm grateful for all the times you carry me in the games we play together",
  "You're my voice of reason when doubt seeps into me",
  "I can be unapologetically myself, knowing that you'll communicate any issues directly",
  "I've changed for the better because I met you."
];


const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const FourthPage: React.FC = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const router = useRouter();

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const handleNextPage = () => {
    router.push('/FinalPage');
  };

  const currentIndex = ((page % reasons.length) + reasons.length) % reasons.length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-200 to-purple-300 p-8 flex flex-col items-center justify-center">
      <motion.h1 
        className="text-4xl font-bold text-purple-800 mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Reasons why I'm grateful for you
      </motion.h1>
      
      <div className="relative w-full max-w-2xl h-64 overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="absolute w-full h-full flex items-center justify-center bg-white rounded-lg shadow-lg p-8"
          >
            <p className="text-xl text-center text-purple-700">
              {currentIndex + 1}. {reasons[currentIndex]}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
      
      <div className="mt-8 flex justify-between w-full max-w-2xl">
        <button
          onClick={() => paginate(-1)}
          className="p-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors duration-300"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => paginate(1)}
          className="p-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors duration-300"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      <motion.button
        className="mt-8 px-6 py-3 bg-pink-500 text-white rounded-full text-xl font-semibold hover:bg-pink-600 transition-colors duration-300"
        onClick={handleNextPage}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Continue to Final Page
      </motion.button>
    </div>
  );
};

export default FourthPage;
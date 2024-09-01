import React from 'react';
import Image from 'next/image';
import Confetti from '../components/Confetti';

const FinalPage: React.FC = () => {
  return (
    <div className="relative h-screen w-full bg-pink-300 flex flex-col items-center justify-center overflow-hidden">
      <Confetti />
      
      <h1 className="text-6xl font-bold text-white mb-8 z-10">
        Happy Birthday Annette!
      </h1>
      
      <div className="relative w-64 h-64 z-10">
        <Image
          src="/FinalPage/cake.png"
          alt="Birthday Cake"
          layout="fill"
          objectFit="contain"
        />
      </div>
      
      <div className="absolute top-4 right-4 w-64 h-64">
        <Image
          src="/FinalPage/gif1.gif"
          alt="Celebration GIF 1"
          layout="fill"
          objectFit="contain"
        />
      </div>
      
      <div className="absolute bottom-4 right-4 w-64 h-64">
        <Image
          src="/FinalPage/gif2.gif"
          alt="Celebration GIF 2"
          layout="fill"
          objectFit="contain"
        />
      </div>
      
      <div className="absolute top-4 left-4 w-64 h-64">
        <Image
          src="/FinalPage/gif3.gif"
          alt="Celebration GIF 3"
          layout="fill"
          objectFit="contain"
        />
      </div>

      <div className="absolute bottom-4 left-4 w-64 h-64">
        <Image
          src="/FinalPage/gif4.gif"
          alt="Celebration GIF 4"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default FinalPage;
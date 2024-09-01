'use client';

import React, { useState, useEffect } from 'react';
import { ParallaxProvider, ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import { ChevronDown } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

const ThirdPage: React.FC = () => {
    const router = useRouter();
    const [showButton, setShowButton] = useState(false);
  
    const handleNext = () => {
      router.push('/FourthPage');
    };

  
    return (
      <ParallaxProvider>
        <div className="h-screen overflow-y-scroll snap-y snap-mandatory relative">
          <ParallaxBanner className="h-screen snap-start">
            <ParallaxBannerLayer image="/ThirdPage/background1.jpg" speed={-20} />
            <ParallaxBannerLayer className="flex items-center justify-center">
              <div className="text-center text-white text-4xl font-bold">
                <p>Sorry I couldn&apos;t get you real flowers</p>
                <ChevronDown className="mt-8 animate-bounce" size={48} />
              </div>
            </ParallaxBannerLayer>
          </ParallaxBanner>
  
          <ParallaxBanner className="h-screen snap-start">
            <ParallaxBannerLayer image="/ThirdPage/background2.jpg" speed={-20} />
            <ParallaxBannerLayer className="flex items-center justify-center">
              <div className="w-64 h-64 rounded-full overflow-hidden bg-white">
                <img 
                  src="/ThirdPage/hampter.jpg" 
                  alt="Hampter" 
                  className="w-full h-full object-cover"
                />
              </div>
            </ParallaxBannerLayer>
          </ParallaxBanner>
  
          <ParallaxBanner className="h-screen snap-start">
            <ParallaxBannerLayer image="/ThirdPage/background3.jpg" speed={-20} />
            <ParallaxBannerLayer className="flex items-center justify-center">
              <div className="text-center text-white text-4xl font-bold">
                <p>So I got you some virtual ones!</p>
              </div>
            </ParallaxBannerLayer>
          </ParallaxBanner>
  
          <div className="h-screen snap-start relative">
            <img 
              src="/ThirdPage/background4.jpg" 
              alt="Background 4" 
              className="w-full h-full object-contain"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <img src="/ThirdPage/flower.gif" alt="Virtual flowers" className="max-w-md rounded-lg shadow-lg" />
            </div>
          </div>
  
          <div className="fixed bottom-8 left-0 right-0 flex justify-center">
          <button
            className="px-6 py-3 bg-pink-500 text-white rounded-full text-xl font-semibold 
                       hover:bg-pink-600 transition-colors duration-300"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
      </ParallaxProvider>
    );
  };

export default ThirdPage;
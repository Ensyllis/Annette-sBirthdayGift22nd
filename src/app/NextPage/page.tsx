'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Confetti from '../components/Confetti'

export default function NextPage() {
  const [showConfetti, setShowConfetti] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setShowConfetti(true)
    const timer = setTimeout(() => setShowConfetti(false), 5000) // Confetti stops after 5 seconds
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-4xl font-bold mb-8 animate-bounce">Hello Birthday Girl!</h1>
      <div className="mb-8">
        <Image
          src="/SecondPage/birthday_gif.gif"
          alt="Birthday Celebration"
          width={400}
          height={300}
          style={{ margin: 'auto' }}
        />
      </div>
      <button
        className="px-6 py-3 bg-pink-500 text-white rounded-full text-xl font-semibold 
                   hover:bg-pink-600 transition-colors duration-300 animate-pulse"
        onClick={() => router.push('/ThirdPage')} // Update this to the actual next page route
      >
        Next
      </button>
      {showConfetti && <Confetti />}
    </div>
  )
}
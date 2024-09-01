'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const StartingPage = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const router = useRouter()

  const handleImageClick = (index: number) => {
    setSelectedImage(index)
  }

  const handleSubmit = () => {
    if (selectedImage === 3) {
      router.push('/NextPage')
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Who is the goodest boy?</h1>
      <div className="flex justify-center space-x-4 mb-4">
        {[1, 2, 3, 4].map((num, index) => (
          <div
            key={num}
            className={`border-4 ${
              selectedImage === index ? 'border-blue-500' : 'border-gray-200'
            }`}
            onClick={() => handleImageClick(index)}
          >
            <Image
              src={`/StartingPage/image${num}.jpg`}
              alt={`Image ${num}`}
              width={150}
              height={150}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  )
}

export default StartingPage
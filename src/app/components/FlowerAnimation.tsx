import React, { useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'

const FlowerAnimation: React.FC = () => {
  const flowerRefs = useRef<(HTMLDivElement | null)[]>([])

  const setFlowerRef = useCallback((el: HTMLDivElement | null, index: number) => {
    if (el) {
      flowerRefs.current[index] = el
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const flowerDiv = entry.target as HTMLDivElement
          flowerDiv.style.opacity = '1'
          observer.unobserve(flowerDiv)
        }
      })
    }, { threshold: 0.1 })

    flowerRefs.current.forEach((flowerRef) => {
      if (flowerRef) observer.observe(flowerRef)
    })

    return () => observer.disconnect()
  }, [])

  const flowerPositions = [
    { top: '10%', left: '20%' },
    { top: '15%', left: '50%' },
    { top: '10%', left: '80%' },
    { top: '70%', left: '30%' },
    { top: '75%', left: '70%' },
  ]

  return (
    <div className="flower-container">
      {flowerPositions.map((position, index) => (
        <div 
          key={index} 
          ref={(el) => setFlowerRef(el, index)}
          className="flower" 
          style={{
            position: 'absolute',
            top: position.top,
            left: position.left,
            transform: 'translate(-50%, -50%)',
            opacity: 0,
            transition: 'opacity 1s ease-in-out'
          }}
        >
          <Image
            src="/ThirdPage/flower_animation.gif"
            alt="Blooming Flower"
            width={100}
            height={100}
          />
        </div>
      ))}
      <style jsx>{`
        .flower-container {
          position: relative;
          width: 100%;
          height: 100vh;
        }
      `}</style>
    </div>
  )
}

export default FlowerAnimation
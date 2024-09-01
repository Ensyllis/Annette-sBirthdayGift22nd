'use client'

import { useEffect, useState } from 'react'
import ReactConfetti from 'react-confetti'

const Confetti = () => {
  const [windowDimension, setWindowDimension] = useState({ width: 0, height: 0 })

  useEffect(() => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }, [])

  return (
    <ReactConfetti
      width={windowDimension.width}
      height={windowDimension.height}
      recycle={false}
      numberOfPieces={200}
    />
  )
}

export default Confetti
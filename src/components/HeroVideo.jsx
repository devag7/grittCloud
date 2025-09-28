import React from 'react'
import { assets } from '../assets/assets'

const HeroVideo = () => {
  return (
    <div className="w-full flex items-center justify-center overflow-hidden mt-24 md:mt-12 px-4 sm:px-6 lg:px-8">
      <div className="rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl shadow-black/30 w-full max-w-7xl h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]">
        <video
          src={assets.heroVdo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          aria-label="Company showcase video demonstrating our AI solutions"
          // Optional: Add poster for loading state
          // poster={assets.videoPoster}
        />
      </div>
    </div>
  )
}

export default HeroVideo
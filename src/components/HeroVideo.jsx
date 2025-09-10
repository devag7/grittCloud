import React from 'react'
import { assets } from '../assets/assets'

const HeroVideo = () => {
  return (
    <div className=" w-full h-full flex items-center justify-center pt-44 px-32 overflow-hidden">
      <div className='rounded-3xl overflow-hidden shadow-2xl shadow-black/30 w-full h-full'>
        <video
        src={assets.heroVdo}
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
      />
      </div>
    </div>
  )
}

export default HeroVideo
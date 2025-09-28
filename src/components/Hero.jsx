import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <div className="flex items-center justify-center pt-44">
        <div className="flex flex-col items-center">
          <p className="text-black/70 text-lg mb-6 font-FK-Grotesk">A new browser from <u>Perplexity</u></p>
          <h1 className="text-8xl font-thin mb-12  tracking-tighter font-ultralight">A pers
            <span className='font-ultralight-italic'>o</span>
            nal 
            AI
            <span className='font-ultralight-italic'> a</span>
            ssistant</h1>
          <Button textclass="text-white font-bold font-FK-Grotesk" className="px-8 py-4" text="Get Comet" bgcolor="black"  color="white" txtcolor1="black"/>
          <div className="mt-8 text-black/70 text-lg font-FK-Grotesk">
          <p>Powered by GPT-4, DALL·E 3, and more</p>
        </div>
        <div className="mt-4 text-black/70 text-lg font-ultralight">
          <p>Available on Windows, macOS, Linux, and mobile</p>
          </div>
        </div>
      </div>
  )
}

export default Hero
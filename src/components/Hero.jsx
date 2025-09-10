import React from 'react'

const Hero = () => {
  return (
    <div className="flex items-center justify-center pt-44">
        <div className="flex flex-col items-center">
          <p className="text-black/70 text-lg">A new browser from <u>Perplexity</u></p>
          <h1 className="text-8xl font-thin  tracking-tighter">A personal AI assistant</h1>

          <div className="rounded-full bg-black px-12 py-4 mt-8 text-white flex justify-between items-center">
             <div className="rounded-full ">
                <img src="#" alt="#" />
             </div>
            <p>Get Conenct</p>
          </div>
        </div>
      </div>
  )
}

export default Hero
import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <div className="flex items-center justify-center pt-44">
        <div className="flex flex-col items-center">
          <p className="text-black/70 text-lg">A new browser from <u>Perplexity</u></p>
          <h1 className="text-8xl font-thin mb-12  tracking-tighter">A personal AI assistant</h1>
          <Button textclass="text-white font-bold" className="px-8 py-4" text="Get Comet" bgcolor="black"  color="white" txtcolor1="black"/>
        </div>
      </div>
  )
}

export default Hero

{/* <div className="flex flex-col items-center">
        <p className="text-black/70 text-lg">A new browser from <u>Perplexity</u></p>
        <h1 className="text-8xl font-sans  tracking-tighter">A personal AI assistant</h1>

        <div className="rounded-full bg-black px-12 py-4 mt-8 text-white flex justify-between items-center">
          <div className="rounded-full ">
            <img src="#" alt="#" />
          </div>
          <p>Get Conenct</p>
        </div>
        use of custom font div 
        <div className="mt-8 text-black/70 text-lg font-myfont italic">
          <p>Powered by GPT-4, DALL·E 3, and more</p>
        </div>

      </div>
    </div> */}
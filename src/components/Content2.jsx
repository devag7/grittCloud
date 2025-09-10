import React from 'react'
import { assets } from '../assets/assets'

const Content2 = () => {
  return (
    <div className='w-full min-h-full flex flex-col items-center justify-center gap-6 px-12 py-44'>
       <div className='flex flex-col items-center gap-6 text-center'>
         <h3 className='text-4xl w-[60%]'>Comet is an AI-powered browser that acts as a personal assistant and thinking partner.</h3>
        <p className='text-2xl text-black/50'>Boost your focus, streamline your workflow, and turn curiosity into momentum.</p>
       </div>

       <div className='h-[90vw] relative mt-20 w-full rounded-[20%] overflow-hidden'>
        <div className='absolute flex flex-col left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 py-12 items-center justify-between text-white text-center px-12'>
          <h4 className='text-2xl'>Use Comet to</h4>
          <div className='px-6 py-3 flex'>
            <div className='bg-black rounded'>
                
            </div>
            Get Connect
          </div>
        </div>
        <img src={assets.spaceImg} className='w-full h-full object-cover' alt="" />
       </div>
    </div>
  )
}

export default Content2
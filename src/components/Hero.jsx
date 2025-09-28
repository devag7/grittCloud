// src/components/Hero.jsx
import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <div className="flex items-center justify-center pt-44">
        <div className="flex flex-col items-center">
          
          {/* TOP TIER: Pre-Heading */}
          <p className="text-black/70 text-lg font-FK-Grotesk">Leverage the Power of the Cloud</p>
          
          {/* MIDDLE TIER: MAIN HEADLINE (Build your next AI agent) */}
          <h1 className="text-8xl font-thin mb-10 tracking-tighter font-ultralight text-center px-4">
            Build your next AI 
            <span className='font-ultralight-italic'> A</span>
            gent
          </h1>
          
          {/* BUTTON */}
          <Button textclass="text-white font-bold font-FK-Grotesk" className="px-8 py-4" text="Book Free Consultation" bgcolor="black"  color="white" txtcolor1="black"/>
          
          {/* TIER 2: End-to-End Solutions */}
          <div className="mt-8 text-black/70 text-xl font-FK-Grotesk text-center">
            <p>End-to-End Solutions: Machine Learning, MLOps, Data Engineering</p>
          </div>
          
          {/* TIER 3: Specialization */}
          <div className="mt-4 text-black/70 text-xl font-ultralight text-center">
            <p>Specializing in GCP (Vertex AI), AWS (SageMaker), and Azure (Machine Learning)</p>
          </div>
          
        </div>
      </div>
  )
}

export default Hero
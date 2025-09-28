// src/pages/Home.jsx
import React from "react";
import Hero from "../components/Hero";
import HeroVideo from "../components/HeroVideo";
import Content2 from "../components/Content2";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Farmer from "../components/Farmer";
import Professional from "../components/Professional";
// NEW IMPORTS
import SectionTwo from "../components/SectionTwo";
import SectionThree from "../components/SectionThree";
import CalEmbed from "../components/CalEmbed"; 

const Home = () => {
  return (
    <div className="py-20 w-full h-screen ">
      <Hero />
      <HeroVideo />
      <Content2 />
      
      {/* SECTION 1: Original Professional content */}
      <Professional/> 
      
      {/* SECTION 2: Duplicated content */}
      <SectionTwo/> 
      
      {/* SECTION 3: Duplicated content */}
      <SectionThree/> 
      
      
      <CalEmbed/> 
      <Faq/>
      <Footer/>
      
    </div>
  );
};

export default Home;
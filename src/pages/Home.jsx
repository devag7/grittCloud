import React from "react";
import Hero from "../components/Hero";
import HeroVideo from "../components/HeroVideo";
import Content2 from "../components/Content2";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Farmer from "../components/Farmer";
import Professional from "../components/Professional";
import BackBall from "../components/BackBall";

const Home = () => {
  return (
    <div className="py-20 w-full h-screen ">
      <BackBall />
      <Hero />
      <HeroVideo />
      <Content2 />
      <Professional/>
      <Professional/>
      <Professional/>
      <Faq/>
      <Farmer/>
      <Footer/>
      
    </div>
  );
};

export default Home;

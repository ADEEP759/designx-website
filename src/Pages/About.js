import React, { useEffect } from "react";
import HeaderDemo from "./../Components/Common/HeaderDemo";
import AboutusHero from "../Components/About/AboutusHero";
import AboutContent from "../Components/About/AboutContent";
import Vision from "../Components/About/Vision";
import Founders from "../Components/About/Founders";
import TimeLine from "../Components/About/TimeLine";
import Footer from '../Components/Common/Footer'
// import Main from "../Components/About/Main";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div>
      <HeaderDemo />
      <AboutusHero />
      <AboutContent />
      <Vision />
      <Founders />
      {/* <Main /> */}
      <TimeLine/>
      <Footer/>
    </div>
  );
};

export default About;

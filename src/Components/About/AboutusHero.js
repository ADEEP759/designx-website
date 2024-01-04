import React from "react";
import "../Assets/CSS/AboutusHero.css";
import AboutHero from "../Assets/Images/aboutHeroImage.png";
import spring from "../Assets/Images/backgroundSprings.svg";
import Marquee from "react-fast-marquee";
import unilever from "../Assets/Images/unilever.svg";
import amber from "../Assets/Images/amber.svg";
import dabur from "../Assets/Images/daber.svg";
import toray from "../Assets/Images/torey.svg";
import hero from "../Assets/Images/hero.svg";
import tvs from "../Assets/Images/tvs.svg";
const AboutusHero = () => {
  return (
    <div className="heroAbout pt-[140px] h-auto pb-[50px]">
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 mx-[10px] lg:mx-[50px]">
        <img src={AboutHero} alt="" className="relative z-[1]" />
        <div>
          <div className="text-[35px] lg:text-[43px] px-[15px] sm:px-[20px] mt-[0px] lg:mt-[15%] relative z-[1]">
            <p className="text-[16px] sm:text-[20px] md:text-[35px] lg:text-[43px] text-white font-poppins font-medium">Inspire. Aspire. Automate</p>
            <p className="text-[12px] sm:text-[14px] md:text-[18px] lg:text-[20px] text-[#adadad] font-poppins md:text-justify w-[100%] md:w-[89%]">Craft a new manufacturing era to attain
            maximum efficiency. With DesignX, step towards a digital future to
            reach the zenith of success.</p>
             
          </div>
          <img src={spring} alt="" className="tiltSpring" />
        </div>
      </div>
      <p className="mt-[50px] lg:mt-[100px] mx-[15px] sm:mx-[30px] text-[20px] sm:text-[28px] lg:text-[32px] text-white font-poppins font-medium underline underline-offset-[12px]">
        Trusted By
      </p>
      <div className="mx-[0px] lg:mx-[85px]">
        <Marquee>
          <img src={unilever} alt="" className="ml-[40px]" />
          <img
            src={amber}
            alt=""
            className="ml-[40px] lg:ml-[120px] 2xl:ml-[150px]"
          />
          <img
            src={dabur}
            alt=""
            className="ml-[40px] lg:ml-[120px] 2xl:ml-[150px]"
          />
          <img
            src={toray}
            alt=""
            className="ml-[40px] lg:ml-[120px] 2xl:ml-[150px]"
          />
          <img
            src={hero}
            alt=""
            className="ml-[40px] lg:ml-[120px] 2xl:ml-[150px]"
          />
          <img
            src={tvs}
            alt=""
            className="ml-[40px] lg:ml-[120px] 2xl:ml-[150px]"
          />
        </Marquee>
      </div>
    </div>
  );
};

export default AboutusHero;

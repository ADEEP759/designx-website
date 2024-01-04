import React from "react";
import heroImage from "../Assets/Images/heroimage-min.png";
import "../Assets/CSS/HeroSection.css";
import CountUp from "react-countup";

const HeroSection = () => {
  return (
    <div className="heroBackGround">
      <img src={heroImage} alt="" className="w-full pt-[75px] sm:hidden block" />
      <div className="relative top-[0px] sm:top-[120px]">
        <div className="text-white text-[16px] sm:text-[32px] md:text-[38px] lg:text-[43px] font-poppins capitalize text-center px-[5px]">
          millions of data points, but only 1% reaches <br className="hidden lg:block"/> decision-makers
        </div>
        <div className="text-[#DADADA] text-[10px] md:text-[14px] lg:text-[18px] mt-[10px] text-center px-[20px]">
          Capture remaining 99% data points by digitizing end-to-end
          manufacturing processes with DFOS
        </div>
        {/* <button className="btn-start text-[18px] md:text-[24px] text-white font-medium w-[170px] h-[56px] rounded-[11px] ml-[35%] md:ml-[44.2%] mt-[50px]">
          Start Today
        </button> */}
      </div>
      <div className="backNo flex justify-around w-full px-[10px] sm:px-[50px] h-[0px] sm:h-[350px] md:h-auto p-[60px] md:p-[50px] mt-[0%] sm:mt-[50%]">
        <div className="font-poppins text-[14px] text-center md:text-[28px] xl:text-[68px]">
          <CountUp start={0} end={350} delay={1} className="text-gradient"/>
          <span className="text-gradient">+</span>
          <p className="text-[10px] text-white sm:text-[20px] xl:text-[18px] lg:w-[100%] relative p-2 mt-0 sm:mt-[20px]">
            Manufacturing Plants
          </p>
        </div>
        <div className="font-poppins text-center text-[14px] md:text-[28px] xl:text-[68px]">
          <CountUp start={0} end={40} delay={1}  className="text-gradient"/>
          <span className="text-gradient">+</span>
          <p className="text-[10px] text-white sm:text-[20px] xl:text-[18px] relative p-2 mt-0 sm:mt-[20px]">
            Customers
          </p>
        </div>
        <div className="font-poppins text-center text-[14px] md:text-[28px] xl:text-[68px]">
          <CountUp start={0} end={1550} delay={2} className="text-gradient"/>
          <span className="text-gradient">+</span>
          <p className="text-[10px] text-white sm:text-[20px] xl:text-[18px] relative p-2 mt-0 sm:mt-[20px]">
            Project Excluded
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

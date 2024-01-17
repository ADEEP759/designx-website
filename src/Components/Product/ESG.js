import React from "react";
import esg from "../Assets/Images/ESG.svg";
import readMoreArrow from "../Assets/Images/readMoreArrow.svg";
import { Link } from "react-router-dom";
const ESG = () => {
  return (
    <div className="py-[30px] sm:py-[50px] lg:py-[180px]">
      <p className="text-white text-[22px] sm:text-[24px] lg:text-[28px] font-poppins font-medium mx-[15px] block lg:hidden">
        ESG
      </p>
      <div className="flex flex-col lg:grid grid-cols-2 gap-4 mx-[15px] sm:mx-[30px] lg:mx-[80px]">
        <div className="flex justify-center lg:justify-start">
          <img src={esg} alt="" />
        </div>
        <div className="pl-[0px] md:pl-[50px] lg:pl-[80px]">
          <p className="text-white text-[24px] lg:text-[28px] xl:text-[32px] font-poppins font-medium hidden lg:block tracking-wide">
            ESG
          </p>
          <p className="text-[#C8C8C8] text-[12px] sm:text-[14px] lg:text-[18px] font-poppins tracking-wide leading-[20px] lg:leading-[36px]">
            Enhance long-term sustainability, attract responsible investors, and
            contribute positively to society and the planet by embracing
            environment social governance principles with DFOS. ESG is a sound
            business strategy that aligns financial success with societal and
            environmental well-being. 
          </p>
          <Link to="/BlogDetails" className="no-underline">
            <button className="blogReadButton flex items-center justify-around w-[120px] sm:w-[151px] h-[40px] text-[12px] sm:text-[14px] lg:text-[18px] rounded-[7px] font-inter font-normal text-white tracking-wide">
              Read More <img src={readMoreArrow} alt="" className="w-[20px] lg:w-[27px]"/>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ESG;

import React from "react";
import digitalTwin from "../Assets/Images/digitalTwinNew.svg";
import readMoreArrow from "../Assets/Images/readMoreArrow.svg";
import { Link } from "react-router-dom";
const ProductDigitalTwin = () => {
  return (
    <div className="py-[30px] sm:py-[60px] lg:py-[150px]">
      <p className="text-white text-[22px] md:text-[24px] lg:text-[28px] xl:text-[32px] font-poppins font-medium px-[15px] sm:px-[30px] block lg:hidden">
        Digital Twin
      </p>
      <div className="flex flex-col lg:grid grid-cols-2 gap-4 mx-[15px] sm:mx-[30px] lg:mx-[80px]">
        <div className="flex justify-center lg:justify-start">
          <img src={digitalTwin} alt="" />
        </div>
        <div className="mt-[0px] ml-[0px] xl:mt-[20px] pl-[0px] md:pl-[50px] lg:pl-[80px]">
          <p className="text-white text-[24px] lg:text-[28px] font-poppins font-medium hidden lg:block">
            Digital Twin
          </p>
          <p className="text-[#C8C8C8] text-[12px] sm:text-[14px] lg:text-[18px] font-poppins tracking-wide leading-[20px] lg:leading-[30px] xl:leading-[36px]">
            We built a 3D digital twin of your complete shopfloor, which helps
            you check the functioning even when you aren’t around. Manage your
            manufacturing hub from anywhere around the globe with your
            smartphone on the DFOS mobile application.
            <br />
            So, you can visit your manufacturing plant anytime with our digital
            twin.
          </p>
          <Link to="/DigitalTwin" className="no-underline">
            <button className="blogReadButton flex text-[12px] sm:text-[14px] lg:text-[18px] items-center justify-around w-[120px] sm:w-[151px] h-[40px] rounded-[7px] font-inter font-normal text-white tracking-wide">
              Read More <img src={readMoreArrow} alt="" className="w-[20px] lg:w-[27px]" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDigitalTwin;

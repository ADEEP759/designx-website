import React from "react";
import split from "../Assets/Images/partGradient.svg";
const Vision = () => {
  return (
    <div className="vision py-[27px] px-[40px] lg:px-[80px] w-full h-auto lg:h-[214px]">
      <div className="flex flex-col sm:flex-row justify-center items-center">
        <div className="w-full sm:w-[45%]">
          <p className="text-[16px] sm:text-[24px] md:text-[28px] lg:text-[32px] text-white font-poppins font-medium">
            Our Vision
          </p>
          <p className="text-[12px] md:text-[14px] lg:text-[18px] text-[#adadad] font-poppins">
            To accelerate transition of manufacturing industry towards digital
            transformation through DFOS
          </p>
        </div>
        <div className="w-[10%] ml-[60px] hidden sm:block">
          <img src={split} alt="" />
        </div>
        <div className="w-full sm:w-[45%]">
          <p className="text-[16px] sm:text-[24px] md:text-[28px] lg:text-[32px] text-white font-poppins font-medium">
            Our Mission
          </p>
          <p className="text-[12px] md:text-[14px] lg:text-[18px] text-[#adadad] font-poppins">
            To pre-create the manufacturing future with self-serving tech
          </p>
        </div>
      </div>
    </div>
  );
};

export default Vision;

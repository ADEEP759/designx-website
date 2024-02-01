import React from "react";
import computerVision from "../Assets/Images/computerVision.svg";
const ComputerVision = () => {
  return (
    <div className="tiltBGProduct">
      <div className="IIOT py-[30px] sm:py-[50px] lg:py-[100px] px-[15px] sm:px-[30px] lg:px-[80px]">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-0 sm:gap-4 pt-[0px] lg:pt-[100px]">
          <div className=" overlook">
            <p className="text-white text-[22px] sm:text-[24px] lg:text-[28px] xl:text-[32px] font-poppins font-medium capitalize">
              Computer Vision
            </p>
            <p className="text-[#C8C8C8] text-[12px] sm:text-[14px] lg:text-[18px] font-poppins tracking-wide leading-[20px] lg:leading-[30px] xl:leading-[36px] hidden lg:block">
            Computer vision allows your system & computers to derive relevant information from images, videos & visuals. In simple terms, it works like a human vision with certain exceptions. Capture all the shop floor insights using the algorithms of computer vision. It ensures safer operations, eliminates errors & enhances the manufacturing environment's safety. Extract meaningful insights using computer vision via DFOS and take the manufacturing processes into a new era of efficiency and safety.   
            </p>
          </div>
          <div className="checkImage flex justify-center lg:justify-start pl-[0px] md:pl-[50px] lg:pl-[80px]">
            <img src={computerVision} alt="" className="mt-[0px] lg:mt-[70px]" />
          </div>
        </div>
        <div className="computerVisionMobile pr-[0px] md:pr-[50px] lg:pr-[80px] block lg:hidden">
          <p className="text-[#C8C8C8] text-[12px] sm:text-[14px] lg:text-[18px] font-poppins tracking-wide leading-[20px] lg:leading-[36px]">
          Computer vision allows your system & computers to derive relevant information from images, videos & visuals. In simple terms, it works like a human vision with certain exceptions. Capture all the shop floor insights using the algorithms of computer vision. It ensures safer operations, eliminates errors & enhances the manufacturing environment's safety. Extract meaningful insights using computer vision via DFOS and take the manufacturing processes into a new era of efficiency and safety.   
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComputerVision;

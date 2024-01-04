import React from "react";
import "../Assets/CSS/ContentTwo.css";
import checkSheet from '../Assets/Images/checkImage.png'
import spring from '../Assets/Images/springDark.svg' 
import { Link } from "react-router-dom";

const ContentTwo = () => {
  return (
    <div className="tiltBGHomepage">
    <div className="backContTwo">
    <p className="mobileFactory text-white text-[16px] sm:text-[28px] lg:text-[32px] font-poppins font-medium capitalize block lg:hidden">One Factory-One Platform</p>
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-4 pt-[50px] lg:pt-[100px] px-[15px] sm:px-[30px] xl:px-[80px] pb-[30px] lg:pb-[0px]">
        <div className="px-[10px] overlook">
          <p className="text-white text-[28px] lg:text-[32px] font-poppins font-medium capitalize lg:block hidden">One Factory-One Platform</p>
          <p className="text-[#D4D4D4] text-[12px] sm:text-[14px] lg:text-[18px] font-poppins text-justify">
            After interacting with hundreds of people who wanted to change the
            status quo, we realized that a robust solution is imperative. This
            solution can cater to ever-changing requirements on the shop floor
            and give economies of scale.
          </p>
          <p className="text-[#D4D4D4] text-[12px] sm:text-[14px] lg:text-[18px] font-poppins text-justify">
            We heard the change-makers and built DFOS (Digital Factory Operating
            System), a no-code, low-code platform, which empowers you to build
            solutions tailored to your specific shop floor needs.
          </p>
          <p className="text-[#D4D4D4] text-[12px] sm:text-[14px] lg:text-[18px] font-poppins text-justify">
            DFOS provides you with real-time insights and a transparent view of
            the factory leading to data-backed decisions and continuous
            improvement. It's like throwing a bright light on every corner of
            your operations!
          </p>
          <Link to='/Product'><button className="bg-white text-[#001141] text-[12px] sm:text-[14px] md:text-[18px] p-[10px] rounded-[5px] font-poppins font-medium">Know More</button></Link>
        </div>
        <div className="checkImage flex justify-center">
            <img src={checkSheet} alt="" className="relative bottom-[85px] mt-[0px] md:mt-[50px] lg:mt-[0px]"/>
            <img src={spring} alt="" className='absolute top-0 right-[1px] z-[-1] hidden lg:block'/>

        </div>
      </div>
    </div>
    </div>
  );
};

export default ContentTwo;

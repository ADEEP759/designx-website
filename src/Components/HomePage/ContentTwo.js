import React from "react";
import "../Assets/CSS/ContentTwo.css";
import checkSheet from '../Assets/Images/checkImage.svg'
import spring from '../Assets/Images/springDark.svg'

const ContentTwo = () => {
  return (
    <div className="backContTwo">
      <div className="flex pt-[100px]">
        <div className="w-[50%] pl-[78px] pr-[202px]">
          <p className="text-white text-[32px] font-poppins font-medium capitalize">One Factory-One Platform</p>
          <p className="text-[#D4D4D4] text-[18px] font-poppins text-justify">
            After interacting with hundreds of people who wanted to change the
            status quo, we realized that a robust solution is imperative. This
            solution can cater to ever-changing requirements on the shop floor
            and give economies of scale.
          </p>
          <p className="text-[#D4D4D4] text-[18px] font-poppins text-justify">
            We heard the change-makers and built DFOS (Digital Factory Operating
            System), a no-code, low-code platform, which empowers you to build
            solutions tailored to your specific shop floor needs.
          </p>
          <p className="text-[#D4D4D4] text-[18px] font-poppins text-justify">
            DFOS provides you with real-time insights and a transparent view of
            the factory leading to data-backed decisions and continuous
            improvement. It's like throwing a bright light on every corner of
            your operations!
          </p>
          <button className="bg-white text-[#001141] text-[18px] p-[10px] rounded-[5px] font-poppins font-medium">Know More</button>
        </div>
        <div className="w-[50%]">
            <img src={checkSheet} alt=""/>
            <img src={spring} alt="" className='absolute top-0 right-[1px] z-[-1]'/>

        </div>
      </div>
    </div>
  );
};

export default ContentTwo;

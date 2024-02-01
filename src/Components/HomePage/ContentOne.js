import React from "react";
import "../Assets/CSS/ContentOne.css";
import dashboard from "../Assets/Images/dashboard.svg";
import spring from "../Assets/Images/backgroundSprings.svg";
const ContentOne = () => {
  return (
    <div>
      <div className="backContent h-auto pb-[50px]">
        <p className="text-white text-[22px] sm:text-[28px] lg:text-[32px] font-poppins tracking-wide capitalize pt-[42px] lg:pt-[50px] px-[15px] sm:px-[20px] xl:px-[80px] block lg:hidden">
          Massive volume of manufacturing data is Overlooked
        </p>
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-4 pt-[30px] px-[15px] sm:px-[30px] md:px-[50px] 2xl:px-[80px]">
          <div
            className=" relative z-[10] mt-[0px] lg:mt-[40px]"
          >
            <p className="text-white text-[20px] sm:text-[28px] md:text-[32px] tracking-wide lg:text-[36px] font-poppins font-medium capitalize hidden lg:block">
              Massive volume of manufacturing data is Overlooked
            </p>
            <p className="text-[#D4D4D4] text-[12px] sm:text-[14px] tracking-wide lg:text-[20px] font-poppins leading-[20px] lg:leading-[30px] xl:leading-[36px]">
              As a result, for most manufacturing decision-makers, the
              visibility to their day-to-day operations is opaque. Due to lack
              of historical data, a majority of futuristic decisions are
              instinct-based than data-based. This results in low productivity,
              compromised safety and depreciated quality.
            </p>
            <p className="text-[#D4D4D4] text-[12px] sm:text-[14px] tracking-wide lg:text-[20px] font-poppins leading-[20px] lg:leading-[30px] xl:leading-[36px]">
              Even the ones who wish to change the status quo, when they
              look-out for a solution, often they encounter solutions which are
              expensive and have a high lead time. Despite all the challenges,
              even if they agree to proceed, they find that the identified
              solutions are not agile and do not meet the requirement.
            </p>
          </div>
          <div
            // data-aos="fade-up"
            // data-aos-duration="1000"
            className="flex justify-center 
            // lg:justify-end"
          >
            <img src={dashboard} alt="" className="relative z-[10] w-full" />
            <img
              src={spring}
              alt=""
              className="absolute right-[1px] z-[1] hidden lg:block"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentOne;

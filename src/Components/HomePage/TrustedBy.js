import React from "react";
import "../Assets/CSS/TrustedBy.css";
import client from "../Assets/Images/clientLogos.png";
import { Link } from "react-router-dom";

const TrustedBy = () => {
  return (
    <div className="trustedBy pb-[30px]">
      <p className="text-gradientTrust text-[16px] tracking-wide sm:text-[20px] lg:text-[38px] font-poppins block lg:hidden pt-[50px] px-[10px] lg:px-[40px] xl:px-[80px] font-medium">
        Trusted by
      </p>
      <hr className="w-[20%] border-[3px] tracking-wide border-solid border-[#0049FF] relative bottom-[17px] block lg:hidden left-[17px]" />
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 pt-[10px] sm:pt-[50px] lg:pt-[100px] pb-[20px]">
        <div className="px-[10px] flex justify-center">
          <img src={client} alt="" />
        </div>
        <div className="px-[15px] sm:px-[30px] md:px-[50px] 2xl:px-[80px]">
          <p className="text-gradientTrust tracking-wide text-[28px] lg:text-[38px] font-poppins hidden lg:block font-medium ">
            Trusted by
          </p>
          <hr className="w-[20%] border-[3px] border-solid border-[#0049FF] relative bottom-[17px] hidden lg:block" />
          <p className="text-[20px] sm:text-[28px] md:text-[32px] lg:text-[36px] tracking-wide text-white font-poppins leading-[30px] lg:leading-[36px] font-medium">
            Leverage the Future of Shop Floor Transformation
          </p>
          <p className="text-[12px] sm:text-[14px] md:text-[18px] lg:text-[20px] tracking-wide text-white leading-[20px] lg:leading-[36px] font-poppins font-light">
            Some of the significant members of the manufacturing industry have
            transformed their shop floors by leveraging the SaaS-based platform,
            DFOS and exhibited exemplary digital outcomes.
          </p>
          <p className="text-[12px] sm:text-[14px] md:text-[18px] lg:text-[20px] tracking-wide leading-[36px] text-white font-poppins font-light">
            Empower your shop floors with DFOS.
          </p>
          <Link to="/Contact">
            <button className="bg-white text-[#001141] text-[12px] sm:text-[14px] lg:text-[18px] tracking-wide p-[10px] rounded-[5px] font-poppins font-medium">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;

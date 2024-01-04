import React from "react";
import '../Assets/CSS/Product.css'
import globe from '../../globe.mp4'
const ProductHero = () => {
  return (
    <div className="productHero block lg:flex">
      <div className="font-poppins pt-[70px] lg:pt-[0px] mt-[0px] lg:mt-[200px] px-[15px] sm:px-[30px] lg:px-[80px] w-full lg:w-[50%]">
        <p className="text-white text-[16px] sm:text-[20px] md:text-[32px] lg:text-[43px] mt-[10px] lg:mt-[0px] font-medium">
          Revolutionize Your Shop floor with DFOS!
        </p>
        <p className="text-[#adadad] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] text-justify pr-[0px] lg:pr-[55px]">
          DFOS (Digital Factory Operating System) is a SaaS-based DIY platform
          to design, analyse, automate, and measure shop floor processes. It is
          relevant to 2 million+ factories worldwide helping to improvise their
          manufacturing operations. It eliminates human errors and saves time,
          which assists in expanding the business exponentially.
        </p>
      </div>
      <div className="w-[50%] hidden lg:block">
      <video autoPlay muted loop className="shadow-2xl shadow-black">
        <source src={globe} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>
    </div>
  );
};

export default ProductHero;

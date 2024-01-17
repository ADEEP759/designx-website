import React from "react";
import digitalProcess from "../Assets/Images/digitalProcess.png";

const ProductContent = () => {
  return (
    <div className="contentProduct py-[20px] sm:py-[50px] md:py-[100px]">
      <p className="text-[22px] md:text-[24px] lg:text-[28px] text-white font-poppins font-medium block lg:hidden px-[15px] sm:px-[30px]">
        Digital Process
      </p>
      <div className="flex flex-col lg:grid grid-cols-2 gap-4 mx-[15px] sm:mx-[30px] lg:mx-[80px]">
        <div className="flex justify-center lg:justify-start">
          <img src={digitalProcess} alt="" />
        </div>
        <div className="mt-[0px] pl-[0px] md:pl-[50px] lg:pl-[80px]">
          <p className="text-[24px] lg:text-[28px] xl:text-[32px] text-white font-poppins font-medium hidden lg:block tracking-wide leading-[20px] lg:leading-[36px]">
            Digital Process
          </p>
          <p className="text-[12px] sm:text-[14px] lg:text-[18px] text-[#C8C8C8] font-poppins tracking-wide leading-[20px] lg:leading-[36px]">
            No more information storage costs, as by incorporating DFOS at your
            manufacturing unit, you can easily go paperless. Keeping virtual
            records amplifies your productivity, minimises the chances of data
            loss and human errors, and reduces costs.
          </p>
          <p className="text-[12px] sm:text-[14px] lg:text-[18px] text-[#C8C8C8] font-poppins tracking-wide leading-[20px] lg:leading-[36px]">
            Focusing on the KPIs becomes easier as one can eliminate unnecessary
            documents and papers. In addition, there is a huge impact on carbon
            footprints
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductContent;

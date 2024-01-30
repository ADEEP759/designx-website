import React from "react";
import "../Assets/CSS/IIOTProduct.css";
import IIOTMachine from "../Assets/Images/IIOTMachine.svg";
import readMoreArrow from "../Assets/Images/readMoreArrow.svg";
import { Link } from "react-router-dom";
const ProductIIOT = () => {
  return (
    <div className="tiltBGProduct">
      <div className="IIOT py-[30px] sm:py-[40px] lg:py-[100px] px-[15px] sm:px-[30px] lg:px-[80px]">
        <p className="iiotDetails text-white text-[22px] md:text-[24px] lg:text-[28px] font-poppins font-medium capitalize block lg:hidden">
          IOT
        </p>
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-4 pt-[0px] md:pt-[50px] lg:pt-[100px]">
          <div className=" pr-[0px] md:pr-[50px] lg:pr-[80px] overlook">
            <p className="text-white text-[24px] lg:text-[28px] xl:text-[32px] font-poppins font-medium capitalize hidden lg:block">
              IOT
            </p>
            <p className="text-[#C8C8C8] text-[12px] sm:text-[14px] lg:text-[18px] font-poppins tracking-wide leading-[20px] lg:leading-[30px] xl:leading-[36px]">
              With the assistance of DFOS’s product, Hectos, all your data from
              machines can be automated. We provide you with an IOT gateway,
              Hectos, which is a device that connects all the machines installed
              on your shop floor. This single device can connect sensors,
              controllers, actuators, databases, cloud systems, SCADA systems,
              and so forth on your shop floor.
              <br />
              So, allow this device to make your shop floor automated in one go!
            </p>
            <Link to="/IOTGateway" className="no-underline">
              <button className="blogReadButton flex text-[12px] sm:text-[14px] lg:text-[18px] items-center justify-around w-[120px] sm:w-[151px] h-[40px] rounded-[7px] font-inter font-normal text-white tracking-wide">
                Read More <img src={readMoreArrow} alt="" className="w-[20px] lg:w-[27px]"/>
              </button>
            </Link>
          </div>
          <div className="checkImage flex justify-center lg:justify-start pl-[0px]">
            <img src={IIOTMachine} alt="" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductIIOT;

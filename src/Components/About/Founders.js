import React, { useState } from "react";
import invertedComma1 from "../Assets/Images/invertedComma1.svg";
import invertedComma2 from "../Assets/Images/invertedComma2.svg";
// import dummy from "../Assets/Images/dummyCircle.svg";
import RajatSir from "../Assets/Images/rajatSir.svg";
import NishantSir from "../Assets/Images/nishantSir.png";
import twitter from "../Assets/Images/twitter.svg";
import facebook from "../Assets/Images/facebook.svg";
import linkedin from "../Assets/Images/linkedin.svg";
import { Link } from "react-router-dom";
import "../Assets/CSS/Founders.css";

const Founders = () => {
  const [hoveredFounder, setHoveredFounder] = useState(null);

  const handleFounderHover = (founderName) => {
    setHoveredFounder(founderName);
  };

  return (
    <div className="founder px-[15px] sm:px-[50px] lg:px-[10px] 2xl:px-[80px] pt-[30px] lg:pt-[100px] pb-[50px]">
      <p className="text-[22px] md:text-[28px] block lg:hidden text-white font-poppins font-medium underline underline-offset-8 decoration-[#7292f1]">
            Meet Our Prominent Innovators
          </p>
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-4">
        <div>
          <p className="text-[38px] lg:text-[46px] hidden lg:block text-white font-poppins font-medium underline underline-offset-[10px] decoration-[#7292f1]">
            Meet Our Prominent Innovators
          </p>
          <div className="bg-[#282932] w-[100%] sm:w-[90%] lg:w-[100%] lg:h-[300px] rounded-[17px] pt-[13px] pr-[20px] mt-[20px] sm:mt-[60px] lg:mt-[70px] founderDetails tracking-wide leading-[20px] lg:leading-[36px]">
            <img src={invertedComma1} alt="" className="ml-[10px] sm:ml-[23px] w-[30px] lg:w-[59px]" />
            <p className="text-[18px] sm:text-[24px] lg:text-[28px] text-white font-poppins font-medium ml-[30px] sm:ml-[51px]">
              {hoveredFounder ? hoveredFounder.name : "Rajat Srivastav, CEO"}
            </p>
            <p className="text-[12px] sm:text-[14px] lg:text-[18px] text-white font-poppins font-normal ml-[10px] sm:ml-[30px] pl-[20px]">
              {hoveredFounder
                ? hoveredFounder.description
                : "An enthusiast entrepreneur & visionary with an aim to digitalize and automate the manufacturing industry, combat wastages & up efficiencies."}
            </p>
            <img
              src={invertedComma2}
              alt=""
              className="ml-[92%] sm:ml-[92%] lg:ml-[87%] w-[30px] lg:w-[59px] relative bottom-[10px]"
            />
          </div>
        </div>
        <div className="block sm:flex mt-[50px] lg:mt-[0px]">
          <div
            className="bg-[#282932] w-[313px] h-[506px] rounded-[17px] pt-[65px] cardFounder pl-[20px] hidden sm:block tracking-wide leading-[20px] lg:leading-[36px]"
            onMouseEnter={() =>
              handleFounderHover({
                name: "Rajat Srivastav, CEO",
                description:
                  "An enthusiast entrepreneur & visionary with an aim to digitalize and automate the manufacturing industry, combat wastages & up efficiencies.",
              })
            }
          >
            <img src={RajatSir} alt="" className="mx-auto w-[150px] h-[150px] xl:w-[220px] xl:h-[220px]" />
            <p className="CEO text-[24px] xl:text-[28px] font-poppins font-medium text-center mt-[66px]">
              Rajat Srivastav
            </p>
            <p className="text-[#a0a0a0] text-[20px] lg:text-[24px] font-poppins text-center">
              CEO
            </p>
            <div className="flex justify-around mt-[20px]">
              <img src={twitter} alt="" />
              <img src={facebook} alt="" />
              <Link to="https://www.linkedin.com/in/rajat-srivastava-51215b53/" target='_blank'>
                {" "}
                <img src={linkedin} alt="" />{" "}
              </Link>
            </div>
          </div>
          <div
            className="bg-[#282932] w-[313px] h-[506px] rounded-[17px] pt-[65px] cardFounder ml-[28px] pl-[20px] hidden sm:block tracking-wide leading-[20px] lg:leading-[36px]"
            onMouseEnter={() =>
              handleFounderHover({
                name: "Nishant Srivastav, CTO",
                description:
                  "A strategic thinker with a strong business acumen, Nishant Srivastav is the tech leader. With business tech savvy skills, he foresees the path to success devising a digital strategy.",
              })
            }
          >
            <img src={NishantSir} alt="" className="mx-auto w-[150px] h-[150px] xl:w-[220px] xl:h-[220px]"/>
            <p className="CEO text-[24px] xl:text-[28px] font-poppins font-medium text-center mt-[66px]">
              Nishant Srivastav
            </p>
            <p className="text-[#a0a0a0] text-[20px] lg:text-[24px] font-poppins text-center">
              CTO
            </p>
            <div className="flex justify-around items-center mt-[20px]">
              <img src={twitter} alt="" />
              <img src={facebook} alt="" />
              <Link to="https://www.linkedin.com/in/nishant-srivastav-516450114/" target='_blank'>
                <img src={linkedin} alt="" />
              </Link>
            </div>
          </div>
          <div
            className="bg-[#282932] w-[100%] h-[150px] rounded-[17px] pt-[10px] cardFounder pl-[10px] sm:hidden flex tracking-wide leading-[20px] lg:leading-[36px]"
            onMouseEnter={() =>
              handleFounderHover({
                name: "Rajat Srivastav, CEO",
                description:
                  "An enthusiast entrepreneur & visionary with an aim to digitalize and automate the manufacturing industry, combat wastages & up efficiencies.",
              })
            }
          >
            <img src={RajatSir} alt="" className="mx-auto my-[12px] w-[100px] h-[100px] xl:w-[220px] xl:h-[220px]" />
            <div>
            <p className="CEO text-[16px] xl:text-[28px] font-poppins font-medium text-center px-[15px]">
              Rajat Srivastav
            </p>
            <p className="text-[#a0a0a0] text-[16px] lg:text-[24px] font-poppins text-center px-[15px]">
              CEO
            </p>
            <div className="flex justify-around mt-[20px] px-[15px]">
              <img src={twitter} alt="" className="w-[15px]" />
              <img src={facebook} alt="" className="w-[15px]" />
              <Link to="https://www.linkedin.com/in/rajat-srivastava-51215b53/" target='_blank'>
                {" "}
                <img src={linkedin} alt="" className="w-[15px]" />{" "}
              </Link>
            </div>
            </div>
          </div>
          <div
            className="bg-[#282932] mt-[20px] h-[150px] rounded-[17px] pt-[10px] cardFounder pl-[10px] sm:hidden flex tracking-wide leading-[20px] lg:leading-[36px]"
            onMouseEnter={() =>
              handleFounderHover({
                name: "Nishant Srivastav, CTO",
                description:
                  "A strategic thinker with a strong business acumen, Nishant Srivastav is the tech leader. With business tech savvy skills, he foresees the path to success devising a digital strategy.",
              })
            }
          >
            <img src={NishantSir} alt="" className="mx-auto my-[12px] w-[100px] h-[100px] xl:w-[220px] xl:h-[220px]"/>
            <div>
            <p className="CEO text-[16px] xl:text-[28px] font-poppins font-medium text-center px-[15px]">
              Nishant Srivastav
            </p>
            <p className="text-[#a0a0a0] text-[16px] lg:text-[24px] font-poppins text-center px-[15px]">
              CTO
            </p>
            <div className="flex justify-around mt-[20px] px-[15px]">
              <img src={twitter} alt="" className="w-[15px]" />
              <img src={facebook} alt="" className="w-[15px]" />
              <Link to="https://www.linkedin.com/in/nishant-srivastav-516450114/" target='_blank'>
                <img src={linkedin} alt=""  className="w-[15px]"/>
              </Link>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founders;

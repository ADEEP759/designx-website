import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Assets/CSS/Founders.css";
import invertedComma1 from "../Assets/Images/invertedComma1.svg";
import invertedComma2 from "../Assets/Images/invertedComma2.svg";
import RajatSir from "../Assets/Images/rajatSir.svg";
import NishantSir from "../Assets/Images/nishantSir.png";
import linkedin from "../Assets/Images/linkedinFull.svg";

const foundersData = [
  {
    name: "Rajat Srivastav, CEO",
    description:
      "An enthusiast entrepreneur & visionary with an aim to digitalize and automate the manufacturing industry, combat wastages & up efficiencies.",
    image: RajatSir,
    role: "CEO",
    linkedinURL: "https://www.linkedin.com/in/rajat-srivastava-51215b53/",
  },
  {
    name: "Nishant Srivastav, CTO",
    description:
      "A strategic thinker with a strong business acumen, Nishant Srivastav is the tech leader. With business tech-savvy skills, he foresees the path to success devising a digital strategy.",
    image: NishantSir,
    role: "CTO",
    linkedinURL: "https://www.linkedin.com/in/nishant-srivastav-516450114/",
  },
];

const Founders = () => {
  const [hoveredFounder, setHoveredFounder] = useState(foundersData[0]);

  const handleFounderHover = (founder) => {
    setHoveredFounder(founder);
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
          <div className="bg-[#282932] w-[100%] sm:w-[90%] lg:w-[100%] lg:h-[300px] rounded-[17px] pt-[13px] pr-[20px] mt-[20px] sm:mt-[60px] lg:mt-[70px] founderDetails tracking-wide leading-[20px] lg:leading-[30px] xl:leading-[36px]">
            <img
              src={invertedComma1}
              alt=""
              className="ml-[10px] sm:ml-[23px] w-[30px] lg:w-[59px]"
            />
            <p className="text-[18px] sm:text-[24px] lg:text-[28px] text-white font-poppins font-medium ml-[30px] sm:ml-[51px]">
              {hoveredFounder.name}
            </p>
            <p className="text-[12px] sm:text-[14px] lg:text-[18px] text-white font-poppins font-normal ml-[10px] sm:ml-[30px] pl-[20px]">
              {hoveredFounder.description}
            </p>
            <img
              src={invertedComma2}
              alt=""
              className="ml-[92%] sm:ml-[92%] lg:ml-[87%] w-[30px] lg:w-[59px] relative bottom-[10px]"
            />
          </div>
        </div>
        <div className="block sm:flex mt-[50px] lg:mt-[0px]">
          {foundersData.map((founder, index) => (
            <div
              key={index}
              className={`bg-[#282932] w-[313px] h-[506px] rounded-[17px] pt-[65px] cardFounder ${
                index === 1 ? "ml-[28px]" : "pl-[20px]"
              } hidden sm:block tracking-wide leading-[20px] lg:leading-[36px]`}
              onMouseEnter={() => handleFounderHover(founder)}
            >
              <img
                src={founder.image}
                alt=""
                className="mx-auto w-[150px] h-[150px] xl:w-[220px] xl:h-[220px]"
              />
              <p className="CEO text-[24px] xl:text-[28px] font-poppins font-medium text-center mt-[66px]">
                {founder.name.split(",")[0]}
              </p>
              <p className="text-[#a0a0a0] text-[20px] lg:text-[24px] font-poppins text-center">
                {founder.role}
              </p>
              <div className="flex justify-center mt-[10px]">
                <Link to={founder.linkedinURL} target="_blank">
                  <img src={linkedin} alt="" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Founders;
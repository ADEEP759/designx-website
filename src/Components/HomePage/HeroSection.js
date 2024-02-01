import React, { useState } from "react";
import heroImage from "../Assets/Images/heroimage-min.png";
import "../Assets/CSS/HeroSection.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Counter = ({ start, end, delay, label }) => {
  const [visible, setVisible] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true });

  if (inView && !visible) {
    setVisible(true);
  }

  return (
    <div ref={ref}>
      <div className="font-poppins text-center md:text-[28px] xl:text-[68px]">
        <CountUp
          start={visible ? start : 0}
          end={visible ? end : 0}
          delay={visible ? delay : 0}
          className="text-gradient"
        />
        <span className="text-gradient">+</span>
        <p className="text-[10px] text-white sm:text-[20px] xl:text-[18px] tracking-wide relative p-2 mt-0 sm:mt-[20px]">
          {label}
        </p>
      </div>
    </div>
  );
};
const HeroSection = () => {
  return (
    <div className="heroBackGround">
      <img
        src={heroImage}
        alt=""
        className="w-full pt-[60px] sm:hidden block"
      />
      <div className="relative top-[0px] sm:top-[120px]">
        <div className="text-white text-[22px] sm:text-[32px] md:text-[38px] tracking-wide lg:text-[43px] font-poppins capitalize text-center px-[5px]">
          millions of data points, but only 1% reaches{" "}
          <br className="hidden lg:block tracking-wide" /> decision-makers
        </div>
        <div className="text-[#DADADA] text-[14px] md:text-[14px] lg:text-[18px] mt-[10px] text-center tracking-wide px-[20px]">
          Capture remaining 99% data points by digitizing end-to-end
          manufacturing processes with DFOS<sup><small>&trade;</small></sup>
        </div>
      </div>
      <div className="backNo flex justify-around w-full px-[10px] sm:px-[50px] h-[0px] sm:h-[350px] md:h-auto pt-[30px] sm:pt-[0px] pb-[40px] sm:pb-[0px]  md:p-[50px] mt-[0%] sm:mt-[50%]">
        <Counter start={0} end={350} delay={1} label="Manufacturing Plants" />
        <Counter start={0} end={40} delay={1} label="Customers" />
        <Counter start={0} end={1550} delay={2} label="Project Executed" />
      </div>
    </div>
  );
};

export default HeroSection;

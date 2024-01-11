import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useSpring } from "@react-spring/web";
import "../Assets/CSS/Timeline.css";
import TimelinePhoto from "../Assets/Images/timelineBack.png";

const TimeLine = () => {
  const TimeLineData = [
    {
      id:0,
      year: "Inception: 2015",
      description:
        " NRV DesignX Pvt. Ltd. was found to provide services related to  automation and digitization manufacturing processes.",
    },
    {
      id:1,
      year: "MVP: 2018",
      description:
        "Completed our minimum viable product & started with one factory of Hindustan Unilever.",
    },
    {
      id:2,
      year: "Expansion: 2019",
      description:
        "Expanded to all the factories of HUL in South Asia & added new brands like Hero MotoCorp & Bajaj India.",
    },
    {
      id:3,
      year: "IOT Foray: 2020",
      description:
        "Added IOT capability & built library of communication protocols supporting all the major PLC controller brands. Via DFOS, assisted the Manufacturing Companies in maintaining the trajectory & not derailing from its path in the Covid pandemic times.",
    },
    {
      id:4,
      year: "DFOS Launch: 2021",
      description:
        "Launched DFOS commercially across 110 factories. Added a couple of high-end clients & full-fledged team to support.",
    },
    {
      id:5,
      year: "The Big Move: 2022",
      description:
        "Moved to IIT Delhi office in order to boost our Research & Tech sophistication",
    },
    {
      id:6,
      year: "Growing Steadily: 2023",
      description:
        "Robust team of 70+ handling multifaceted clients & processes spread over more than 350 factories.",
    },
  ];

  const parallaxSpring = useSpring({
    opacity: 0.5,
  });

  return (
    <div className="TimeLine border-b-[1px] border-b-solid border-b-black h-[600px]">
      <div className="background">
        <img
          src={TimelinePhoto}
          alt=""
          className="absolute z-[-1] w-full h-full"
        />
        <p className="scrollText text-white font-poppins font-medium ml-[20px]">
          Timeline
        </p>
        <Parallax
          pages={TimeLineData.length}
          config={{ mass: 1, tension: 280, friction: 24 }}
        >
          {TimeLineData.map((item, index) => {

            return<ParallaxLayer
              key={index}
              sticky={{ start: index, end: index + 1 }}
              style={{
                ...parallaxSpring,
                opacity: index === 0 ? 1 : 0.5, // Set opacity based on focus
              }}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="card sticky">
                  <p>{item.year}</p>
                </div>
                <div className="text-white font-poppins font-medium text-[16px] lg:text-[20px] px-[15px] py-[5px]">
                  {item.description}
                </div>
              </div>
            </ParallaxLayer>}
          )}
        </Parallax>
      </div>
    </div>
  );
};

export default TimeLine;

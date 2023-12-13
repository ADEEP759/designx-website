import React, { useState } from "react";
import "../Assets/CSS/Testimonies.css";
import prevArrow from "../Assets/Images/PreviousArrow.svg";
import nextArrow from "../Assets/Images/nextArrow.svg";
import inverted from '../Assets/Images/inverted.svg'

const Testimonies = () => {
  const texts = [
    {
      head: "Vinod Mishra",
      orgName: "HUL-ORAI",
      desc: "DesignX is a team of professionals. They always act fast on any issue/support required and the good part is that they update after the issue is resolved. Best of luck for the DesignX team.",
    },
    {
      head: "Rajeev Thakur",
      orgName: "Unilever India Exports Limited",
      desc: "We have been working with DesignX, from last few years .Thanks to Development & Service team of DesignX for such regular service. It’s good to see that DesignX team makes continuous improvements on the job, post deployment, as per the feedback given.",
    },
    {
      head: "Aakanksha",
      orgName: "Unilever",
      desc: "The team was very supportive and understanding of our needs. They went all out to ensure our standard questionnaire in place. They also provided continuous support for any improvements in the app on an ongoing basis. An overall smooth & satisfying experience!",
    },
    {
      head: "Varun",
      orgName: "Unilever, IT",
      desc: "DesignX has enabled a key SC Collaboration platform for Hindustan Unilever, helping re-imagine the complete process from the perspective of premium user experience and top quality functional experience.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + texts.length) % texts.length
    );
  };

  return (
    <div className="testimonies w-full h-[1250px] sm:h-[1200px] lg:h-[1200px] xl:h-[850px] 2xl:h-[900px] px-[10px]">
      <div className="block lg:grid lg:grid-cols-2 pt-[5px] sm:pt-[140px] pl-[10px] sm:pl-[78px]">
        <div className="w-full sm:w-[50%] pr-[17px] mt-[5px] sm:mt-[80px] lg:mt-[120px]">
          <p className="text-gradientTest font-poppins text-[32px] lg:text-[42px] font-semibold">
            What Our Clients Are Saying...
          </p>
          <div className="flex">
            <img
              src={prevArrow}
              alt=""
              className="w-[78px] cursor-pointer"
              onClick={handlePrevious}
            />
            <img
              src={nextArrow}
              alt=""
              className="w-[78px] ml-[32px] cursor-pointer"
              onClick={handleNext}
            />
          </div>
        </div>
        <div className="mt-[60px] ml-[0px] lg:ml-[-130px]">
          <img src={inverted} alt="" />
          <div className="carousel-container">
            {texts.map((text, index) => {
              const isCurrent = currentIndex === index;

              const slideStyles = {
                opacity: isCurrent ? 1 : 0.5,
                filter: isCurrent ? "10px" : "0",
                marginTop: isCurrent ? "30px" : "0px",
                transform: `translateX(-${currentIndex * 100}%)`,
                // transition: "transform 0.5s ease-in-out, opacity 0.5s ease-in-out",
                // transitionDelay: isCurrent ? "400ms" : "250ms",
                // transitionProperty: isCurrent ? "margin-top" : "",
              };

              return (
                <div
                  className="slide"
                  key={index}
                  style={slideStyles}
                >
                  <div className="p-[10px] rounded">
                    <p className="text-[#009BF8] font-poppins text-[20px] font-semibold">
                      {text.head}
                    </p>
                    <p className="text-[#A8A8A8] font-poppins text-[16px]">
                      {text.orgName}
                    </p>
                    <p className="text-[#ffffff] font-poppins text-[18px]">
                      {text.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonies;
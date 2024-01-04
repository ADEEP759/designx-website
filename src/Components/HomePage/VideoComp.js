import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../Assets/CSS/VideoComp.css";
import play from "../Assets/Images/playButton.svg";
import videoImagePreview from "../Assets/Images/videoImagepreview.png";
import videoView from "../Assets/Images/videoView.svg";
import videoDemo from "../Assets/video/DFOS intro.mp4";

const VideoComp = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const playVideo = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className="videoContainer">
      <div className="videoComp bg-[#282932] pb-[80px] h-auto md:h-[700px] lg:h-[600px]">
      <p className="text-gradientVidHead block lg:hidden text-[16px] sm:text-[28px] md:text-[38px] ml-[15px] sm:ml-[30px] pt-[45px] text-white font-poppins capitalize font-medium underline underline-offset-8 decoration-[#00A1FF]">
              Harness the power of DFOS
            </p>
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-4 pt-[10px] sm:pt-[50px] lg:pt-[100px] px-[30px] lg:px-[80px] videoContent">
          <div className="px-[10px] mt-[0%] lg:mt-[10%]">
            <p className="text-gradientVid text-[28px] md:text-[38px] text-white font-poppins capitalize hidden lg:block">
              Harness the power of DFOS
            </p>
            <p className="text-white text-[12px] sm:text-[14px] md:text-[18px]">
              Take your manufacturing plant to new heights by getting the utmost
              shop floor visibility, connectivity & real-time insights.
            </p>
            <div className="flex items-center">
              <Link to="/Contact">
                <button className="demo text-white text-[12px] sm:text-[14px] md:text-[18px] 2xl:text-[24px] rounded-[5px] font-medium px-[5px] sm:px-[23px] py-[0px] sm:py-[5px] h-[41px] lg:h-[58px]">
                  Get a Demo
                </button>
              </Link>
              <button
              className="flex justify-center items-center ml-[10px] xl:ml-[59px] h-[41px] lg:h-[58px]"
              onClick={playVideo}
            >
              <img src={play} alt="Play Icon" className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px]" />
              <p className="text-white text-[12px] sm:text-[14px] ml-[5px] md:text-[18px] 2xl:text-[24px] font-poppins font-semibold py-[16px] sm:py-[13px] relative top-2">
                View Video
              </p>
            </button>
            </div>
          </div>
          <div className="w-[664px] border-[5px] border-solid border-[#0046FF] rounded-[15px] video-container relative overflow-hidden">
            <div>
              {!isPlaying && (
                <div className="relative">
                  <img
                    src={videoImagePreview}
                    alt="Video Preview"
                    className="preview-image w-[100%]"
                  />
                  <div
                    className="play-button cursor-pointer"
                    onClick={playVideo}
                  >
                    <img
                      src={videoView}
                      alt="View Video"
                      className="absolute bottom-[40%] left-[45%] w-[40px] h-[40px] lg:w-[50px] lg:h-[50px]"
                    />
                  </div>
                </div>
              )}
              <div>
                <video
                controls
                  ref={videoRef}
                  className={`rounded-[15px] ${isPlaying ? "playing" : "hidden"} w-[100%] rounded-[15px]`}
                  style={{transform: "translate(-50%, 0%)"}}
                >
                  <source src={videoDemo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoComp;

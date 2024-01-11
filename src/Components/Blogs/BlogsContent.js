import React from "react";
import blogPic from "../Assets/Images/blogPic.png";
import iBPMS from "../Assets/Images/IOTBlogImage.png";
import ArtificialIntelligence from '../Assets/Images/artificialBlog.png'
import { Link } from "react-router-dom";
import readMoreArrow from "../Assets/Images/readMoreArrow.svg";
const BlogsContent = () => {
  return (
    <div className="mb-[60px] blogContent">
      <div className="blogContentBackground flex flex-col lg:grid lg:grid-cols-2 w-[88%] h-auto border-[5px] border-solid border-[#0943CB] rounded-[24px] ml-[20px] pb-[20px] sm:ml-[50px] lg:ml-[96px] mb-[41px]">
        <img src={blogPic} alt="" className="rounded-24px h-[107.5%]" />
        <div className="font-poppins mt-[0px] lg:mt-[41px] ml-[10px]">
          <p className="text-white text-[24px] xl:text-[28px] font-medium">
            Industrial Internet of Things: Meaning, Benefits and Uses
          </p>
          <p className="text-[14px] xl:text-[18px] text-[#adadad] font-medium">
            Unveil a plethora of opportunities with IIOT solutions.
          </p>
          <Link to="/BlogDetails" className="no-underline">
            <button className="blogReadButton flex items-center justify-around w-[120px] sm:w-[151px] h-[40px] rounded-[7px] font-inter text-[12px] sm:text-[14px] text-white">
              Read More <img src={readMoreArrow} alt="" />
            </button>
          </Link>
        </div>
      </div>

      <div className="blogContentBackground flex flex-col lg:grid lg:grid-cols-2 w-[88%] h-auto border-[5px] border-solid border-[#0943CB] rounded-[24px] ml-[20px] pb-[20px] sm:ml-[50px] lg:ml-[96px] mb-[41px]">
        <img src={iBPMS} alt="" className="rounded-24px h-[107.5%]" />
        <div className="font-poppins mt-[0px] lg:mt-[41px] ml-[10px]">
          <p className="text-white text-[24px] xl:text-[28px] font-medium">
            How DFOS empowers intelligent business process management
            suite(iBPMS)?{" "}
          </p>
          <p className="text-[14px] xl:text-[18px] text-[#adadad] font-medium">
            Leverage the benefits of Intelligent Business Process Management
            suite{" "}
          </p>
          <Link to="/iBPMS" className="no-underline">
            <button className="blogReadButton flex items-center justify-around w-[120px] sm:w-[151px] h-[40px] rounded-[7px] font-inter text-[12px] sm:text-[14px] text-white">
              Read More <img src={readMoreArrow} alt="" />
            </button>
          </Link>
        </div>
      </div>
      <div className="blogContentBackground flex flex-col lg:grid lg:grid-cols-2 w-[88%] h-auto border-[5px] border-solid border-[#0943CB] rounded-[24px] ml-[20px] pb-[20px] sm:ml-[50px] lg:ml-[96px] mb-[41px]">
        <img src={ArtificialIntelligence} alt="" className="rounded-24px h-[107.5%]" />
        <div className="font-poppins mt-[0px] lg:mt-[41px] ml-[10px]">
          <p className="text-white text-[24px] xl:text-[28px] font-medium">
            How to Leverage the Benefits of Artificial Intelligence?{" "}
          </p>
          <p className="text-[14px] xl:text-[18px] text-[#adadad] font-medium">
          Back in the 90s, artificial intelligence and machine learning were only algorithms and systems, but now....
          </p>
          <Link to="/ArtificialIntelligence" className="no-underline">
            <button className="blogReadButton flex items-center justify-around w-[120px] sm:w-[151px] h-[40px] rounded-[7px] font-inter text-[12px] sm:text-[14px] text-white">
              Read More <img src={readMoreArrow} alt="" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogsContent;

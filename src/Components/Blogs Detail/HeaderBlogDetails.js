import React from "react";

import headerBlockPic from "../Assets/Images/blogDetailspic-min.png";
import { Link } from "react-router-dom";
const HeaderBlogDetails = () => {
  return (
    <div className="blogHeaderBack">
      <div className="block lg:grid lg:grid-cols-2 gap-4 relative z-[1]">
        <div className="pl-[50px] lg:pl-[100px] pr-[50px]">
          <p className="text-white text-[14px] lg:text-[18px] font-inter mt-[31px]">
            <Link to="/" className="homeButton">
              Home
            </Link>{" "}
            /{" "}
            <Link to="/Blogs" className="homeButton">
              Blog
            </Link>
          </p>
          <p className="text-white text-[28px] sm:text-[32px] lg:text-[42px] font-robotoSlab">
            Industrial Internet of Things: Meaning, Benefits and Uses{" "}
          </p>
          <p className="text-[14px] lg:text-[18px] text-white font-poppins font-normal">
            Unveil a plethora of opportunities with IIOT solutions.{" "}
          </p>
        </div>
        <div className="hidden lg:flex lg:justify-end">
          <img src={headerBlockPic} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeaderBlogDetails;

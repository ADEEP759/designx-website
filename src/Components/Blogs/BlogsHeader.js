import React from "react";
import Blogback from "../Assets/Images/blogDetailHeader.svg";
const BlogsHeader = () => {
  return (
    <div>
      <div className="w-full blogHeading pt-[60px] lg:pt-[0px]">
        <img src={Blogback} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default BlogsHeader;

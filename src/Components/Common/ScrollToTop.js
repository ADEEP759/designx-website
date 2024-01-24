import React, { useState, useEffect } from "react";
import scrollTop from '../Assets/Images/topScroll.svg'
const ScrollToTop = () => {
  const [showScrollBtn, setshowScrollBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setshowScrollBtn(true);
      } else {
        setshowScrollBtn(false);
      }
    });
  }, []);
  const backToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="fixed bottom-0 right-2 z-10">
    {" "}
    {showScrollBtn && (
        <img
            src={scrollTop}
            onClick={backToTop}
            id = "ScrollToTopIcon"
                alt=""
                className="cursor-pointer w-[70px]"
                />
    )}{" "}
</div>
  )
};

export default ScrollToTop;

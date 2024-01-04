import React, { useState, useEffect } from "react";

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
    <div className="fixed top-[50px] bottom-0">
    {" "}
    {showScrollBtn && (
        <button
            className="btn btn-primary"
            onClick={backToTop}
            id = "ScrollToTopIcon">
                top
                </button>
    )}{" "}
</div>
  )
};

export default ScrollToTop;

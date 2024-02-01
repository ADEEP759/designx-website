import React, { useEffect } from "react";
import HeroSection from "../Components/HomePage/HeroSection";
import ContentOne from "../Components/HomePage/ContentOne";
import ContentTwo from "../Components/HomePage/ContentTwo";
import TrustedBy from "../Components/HomePage/TrustedBy";
import VideoComp from "../Components/HomePage/VideoComp";
import Testimonies from "../Components/HomePage/Testimonies";
import Footer from "../Components/Common/Footer";
import HeaderDemo from "../Components/Common/HeaderDemo";
import ScrollToTop from "../Components/Common/ScrollToTop";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HeaderDemo />
      <HeroSection />
      <ContentOne />
      <ContentTwo />
      <TrustedBy />
      <VideoComp />
      <Testimonies />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default HomePage;

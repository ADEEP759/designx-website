import React, { useEffect } from "react";
import HeaderDemo from "../Components/Common/HeaderDemo";
import ProductHero from "../Components/Product/ProductHero";
import ProductContent from "../Components/Product/ProductContent";
import ProductIIOT from "../Components/Product/ProductIIOT";
import "../Components/Assets/CSS/Product.css";
import ProductDigitalTwin from "../Components/Product/ProductDigitalTwin";
import ComputerVision from "../Components/Product/ComputerVision";
import ESG from "../Components/Product/ESG";
import Approach from "../Components/Product/Approach";
import Footer from "../Components/Common/Footer";
import WheelChange from "../Components/Product/WheelChange";
import ScrollToTop from "../Components/Common/ScrollToTop";

const Product = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="product">
      <HeaderDemo />
      <ProductHero />
      <ProductContent />
      <ProductIIOT />
      <ProductDigitalTwin />
      <ComputerVision />
      <ESG />
      <WheelChange />
      <Approach />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Product;

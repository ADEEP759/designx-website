import React, { useEffect } from 'react'
// import Header from '../Components/Common/Header'
import HeroSection from '../Components/HomePage/HeroSection'
import ContentOne from '../Components/HomePage/ContentOne'
import ContentTwo from '../Components/HomePage/ContentTwo'
import TrustedBy from '../Components/HomePage/TrustedBy'
import VideoComp from '../Components/HomePage/VideoComp'
import Testimonies from '../Components/HomePage/Testimonies'
import Footer from '../Components/Common/Footer'
import HeaderDemo from '../Components/Common/HeaderDemo'
// import TestimoniesClient from '../Components/HomePage/TestimoniesClient'

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      {/* <Header/> */}
      <HeaderDemo/>
      <HeroSection />
      <ContentOne/>
      <ContentTwo/>
      <TrustedBy/>
      <VideoComp/>
      {/* <TestimoniesClient/> */}
      <Testimonies/>
      <Footer/>
    </div>
  )
}

export default HomePage

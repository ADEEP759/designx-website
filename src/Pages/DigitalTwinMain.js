import React, { useEffect } from 'react'
import HeaderDemo from '../Components/Common/HeaderDemo'
import DigitalTwinBlog from '../Components/Blogs Detail/DigitalTwinBlog'
import ScrollToTop from '../Components/Common/ScrollToTop';

const DigitalTwinMain = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HeaderDemo/>
      <DigitalTwinBlog/>
      <ScrollToTop/>
    </div>
  )
}

export default DigitalTwinMain

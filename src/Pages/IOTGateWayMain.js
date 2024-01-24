import React, { useEffect } from 'react'
import HeaderDemo from '../Components/Common/HeaderDemo'
import IOTGateway from '../Components/Blogs Detail/IOTGateway'
import ScrollToTop from '../Components/Common/ScrollToTop';

const IOTGateWayMain = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div>
      <HeaderDemo/>
      <IOTGateway/>
      <ScrollToTop/>
    </div>
  )
}

export default IOTGateWayMain

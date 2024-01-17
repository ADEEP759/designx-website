import React, { useEffect } from 'react'
import HeaderDemo from '../Components/Common/HeaderDemo'
import IOTGateway from '../Components/Blogs Detail/IOTGateway'

const IOTGateWayMain = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div>
      <HeaderDemo/>
      <IOTGateway/>
    </div>
  )
}

export default IOTGateWayMain

import React, { useEffect } from 'react'
import HeaderDemo from '../Components/Common/HeaderDemo'
import IBPMS from '../Components/Blogs Detail/IBPMS'

const IBPMSMain = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HeaderDemo/>
      <IBPMS/>
    </div>
  )
}

export default IBPMSMain

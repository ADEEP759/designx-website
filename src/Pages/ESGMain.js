import React, { useEffect } from 'react'
import HeaderDemo from '../Components/Common/HeaderDemo';
import ESG from '../Components/Blogs Detail/ESG';

const ESGMain = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div>
        <HeaderDemo/>
        <ESG/>
    </div>
  )
}

export default ESGMain

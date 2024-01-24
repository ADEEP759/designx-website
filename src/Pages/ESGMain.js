import React, { useEffect } from 'react'
import HeaderDemo from '../Components/Common/HeaderDemo';
import ESG from '../Components/Blogs Detail/ESG';
import ScrollToTop from '../Components/Common/ScrollToTop';

const ESGMain = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div>
        <HeaderDemo/>
        <ESG/>
        <ScrollToTop/>
    </div>
  )
}

export default ESGMain

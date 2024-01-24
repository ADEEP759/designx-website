import React, { useEffect } from 'react'
import HeaderDemo from '../Components/Common/HeaderDemo'
import ArtificalIntelligence from '../Components/Blogs Detail/ArtificalIntelligence'
import ScrollToTop from '../Components/Common/ScrollToTop';

const ArtificialIntelligenceMain = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HeaderDemo/>
      <ArtificalIntelligence/>
      <ScrollToTop/>
    </div>
  )
}

export default ArtificialIntelligenceMain

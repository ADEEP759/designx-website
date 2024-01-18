import React, { useEffect } from 'react'
import HeaderDemo from '../Components/Common/HeaderDemo'
import ArtificalIntelligence from '../Components/Blogs Detail/ArtificalIntelligence'

const ArtificialIntelligenceMain = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HeaderDemo/>
      <ArtificalIntelligence/>
    </div>
  )
}

export default ArtificialIntelligenceMain

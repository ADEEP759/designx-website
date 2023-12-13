import React from 'react'
import '../Assets/CSS/ContentOne.css'
import dashboard from '../Assets/Images/dashboard.svg'
import spring from '../Assets/Images/backgroundSprings.svg'
const ContentOne = () => {
  return (
    <div>
    <div className='backContent h-[800px]'>
      <div className='block lg:grid lg:grid-cols-2 gap-4 pt-[30px] lg:pt-[100px]'>
        <div className='px-[10px] lg:px-[78px] relative z-[10]'>
          <p className='text-white text-[28px] lg:text-[32px] font-poppins capitalize'>Massive volume of manufacturing data is Overlooked</p>
          <p className='text-[#D4D4D4] text-[14px] md:text-[18px] font-poppins text-justify'>As a result, for most manufacturing decision-makers, the visibility to their day-to-day operations is opaque. Due to lack of historical data, a majority of futuristic decisions are instinct-based than data-based. This results in low productivity, compromised safety and depreciated quality.</p>
          <p className='text-[#D4D4D4] text-[14px] md:text-[18px] font-poppins text-justify'>Even the ones who wish to change the status quo, when they look-out for a solution, often they encounter solutions which are expensive and have a high lead time. Despite all the challenges, even if they agree to proceed, they find that the identified solutions are not agile and do not meet the requirement.</p>
        </div>
        <div className=''>
          <img src={dashboard} alt="" className='px-[50px] relative z-[10]'/>
          <img src={spring} alt="" className='absolute top-[63rem] right-[1px] z-[1]' />
        </div>
      </div>
    </div>
    </div>
  )
}

export default ContentOne

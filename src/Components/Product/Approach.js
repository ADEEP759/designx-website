import React from 'react'
import Cardone from '../Assets/Images/Card1.png'
import Cardtwo from '../Assets/Images/Card2.png'
import Cardthree from '../Assets/Images/Card3.png'
import '../Assets/CSS/ProductCards.css'
const Approach = () => {
  return (
    <div className='px-[15px] lg:px-[30px] py-[30px] Approach'>
      <p className='text-white text-[22px] sm:text-[36px] lg:text-[46px] font-poppins font-medium underline underline-offset-8 sm:underline-offset-[16px] decoration-[#0088FF] pl-[15px] sm:pl-[52px] tracking-wide'>Our Approch</p>
        <div className='flex flex-col lg:grid lg:grid-cols-3 gap-4 justify-around mt-[30px] sm:mt-[70px] mx-[40px] sm:mx-[60px] lg:mx-[0px]'>
            <img src={Cardone} alt="" />
            <img src={Cardtwo} alt="" />
            <img src={Cardthree} alt="" />
        </div>
    </div>
  )
}

export default Approach

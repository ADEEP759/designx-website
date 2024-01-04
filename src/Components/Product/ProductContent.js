import React from 'react'
import digitalProcess from '../Assets/Images/digitalProcess.png'

const ProductContent = () => {
  return (
    <div className='contentProduct py-[50px] sm:py-[100px]'>
      <p className='text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] text-white font-poppins font-medium block lg:hidden px-[15px] sm:px-[30px]'>Digital Process</p>
      <div className='flex flex-col lg:grid grid-cols-2 gap-4 mx-[15px] sm:mx-[30px] lg:mx-[80px]'>
        <div className='flex justify-center'>
            <img src={digitalProcess} alt="" />
        </div>
        <div className='mt-[0px]'>
            <p className='text-[24px] lg:text-[28px] text-white font-poppins font-medium hidden lg:block'>Digital Process</p>
            <p className='text-[12px] sm:text-[14px] lg:text-[18px] text-[#C8C8C8] font-poppins text-justify'>No more information storage costs, as by incorporating DFOS at your manufacturing unit, you can easily go paperless. Keeping virtual records amplifies your productivity, minimises the chances of data loss and human errors, and reduces costs.</p>
            <p className='text-[12px] sm:text-[14px] lg:text-[18px] text-[#C8C8C8] font-poppins text-justify'>Focusing on the KPIs becomes easier as one can eliminate unnecessary documents and papers. In addition, there is a huge impact on carbon footprints</p> 
        </div>
      </div>
    </div>
  )
}

export default ProductContent

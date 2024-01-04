import React from 'react'
import '../Assets/CSS/IIOTProduct.css'
import IIOTMachine from '../Assets/Images/IIOTMachine.png'
import readMoreArrow from '../Assets/Images/readMoreArrow.svg'
import { Link } from 'react-router-dom'
const ProductIIOT = () => {
  return (
    <div className="tiltBGProduct">
    <div className="IIOT py-[40px] lg:py-[100px] px-[15px] sm:px-[30px] lg:px-[80px]">
    <p className="iiotDetails text-white text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] font-poppins font-medium capitalize block lg:hidden">IIOT</p>
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-4 pt-[0px] md:pt-[50px] lg:pt-[100px]">
        <div className="px-[0px] sm:px-[10px] overlook">
          <p className="text-white text-[24px] lg:text-[28px] font-poppins font-medium capitalize hidden lg:block">IIOT</p>
          <p className="text-[#C8C8C8] text-[12px] sm:text-[14px] lg:text-[18px] font-poppins text-justify">
          With the assistance of DFOS’s product, Hectos, all your data from machines can be automated. We provide you with an IOT gateway, Hectos, which is a device that connects all the machines installed on your shop floor. This single device can connect sensors, controllers, actuators, databases, cloud systems, SCADA systems, and so forth on your shop floor. So, allow this device to make your shop floor automated in one go!
          </p>
          <Link to="/BlogDetails" className='no-underline'><button className='blogReadButton flex text-[12px] sm:text-[14px] items-center justify-around w-[120px] sm:w-[151px] h-[40px] rounded-[7px] font-inter font-normal text-white'>Read More <img src={readMoreArrow} alt="" /></button></Link>
        </div>
        <div className="checkImage flex justify-center">
            <img src={IIOTMachine} alt="" className=""/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ProductIIOT

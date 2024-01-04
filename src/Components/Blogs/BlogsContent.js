import React from 'react'
import blogPic from '../Assets/Images/blogPic.png'
import { Link } from 'react-router-dom';
import readMoreArrow from '../Assets/Images/readMoreArrow.svg'
const BlogsContent = () => {
  return (
    <div className='mb-[12px] blogContent mt-[180px] sm:mt-[250px] lg:mt-[300px]'>
      <div className='blogContentBackground flex flex-col lg:grid lg:grid-cols-2 w-[88%] h-auto border-[5px] border-solid border-[#0943CB] rounded-[24px] ml-[20px] pb-[20px] sm:ml-[50px] lg:ml-[96px]'>
        <img src={blogPic} alt="" className='rounded-24px' />
        <div className='font-poppins mt-[0px] lg:mt-[41px] ml-[10px]'>
            <p className='text-white text-[24px] xl:text-[28px] font-medium'>Industrial Internet of Things: Meaning, Benefits and Uses</p>
            <p className='text-[14px] xl:text-[18px] text-[#adadad] font-medium'>Unveil a plethora of opportunities with IIOT solutions.</p>
            <Link to="/BlogDetails" className='no-underline'><button className='blogReadButton flex items-center justify-around w-[120px] sm:w-[151px] h-[40px] rounded-[7px] font-inter text-[12px] sm:text-[14px] text-white'>Read More <img src={readMoreArrow} alt="" /></button></Link>
        </div>
      </div>
    </div>
  )
}

export default BlogsContent

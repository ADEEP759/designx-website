import React, { useEffect } from 'react'
import HeaderDemo from '../Components/Common/HeaderDemo'
import '../Components/Assets/CSS/Blogs.css'
import BlogsHeader from '../Components/Blogs/BlogsHeader'
import BlogsContent from '../Components/Blogs/BlogsContent'
import Footer from '../Components/Common/Footer'

const Blogs = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='blogback w-full h-[100%]'>
        <HeaderDemo/>
        <BlogsHeader/>
        <BlogsContent/>
        <Footer/> 
    </div>
  )
}

export default Blogs

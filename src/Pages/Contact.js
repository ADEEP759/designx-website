import React, { useEffect } from 'react'
import "../Components/Assets/CSS/Contact.css"
import HeaderDemo from '../Components/Common/HeaderDemo'
import SubmitForm from '../Components/Contact/SubmitForm'
import ClientsTrust from '../Components/Contact/ClientsTrust'
const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='contactUsBackground w-full h-[100%]'>
      <HeaderDemo/>
      <SubmitForm/>
      <ClientsTrust/>
    </div>
  )
}

export default Contact

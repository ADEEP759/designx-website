import React from 'react'
import unilever from '../Assets/Images/unilever.svg'
import amber from '../Assets/Images/amber.svg'
import dabur from '../Assets/Images/daber.svg'
import toray from '../Assets/Images/torey.svg'
import hero from '../Assets/Images/hero.svg'
import tvs from '../Assets/Images/tvs.svg'

const ClientsTrust = () => {
  return (
    <div className='mx-[30px] lg:mx-[100px] mt-[40px] pb-[20px]'>
      <div>
        <p className='text-[20px] text-white font-poppins font-medium' >Trusted by</p>
        <div className="border-b-[3px] border-solid border-white w-[19%]"></div>
        <div className='grid grid-cols-2 gap-4 lg:flex justify-between mt-[20px]'>
            <img src={unilever} alt="" />
            <img src={amber} alt="" />
            <img src={dabur} alt="" />
            <img src={toray} alt=""/>
            <img src={hero} alt="" />
            <img src={tvs} alt="" />
        </div>
      </div>
    </div>
  )
}

export default ClientsTrust

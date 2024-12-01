import React from 'react'
import sup1 from '../../assets/images/about/sup1.svg'
import sup2 from '../../assets/images/about/sup2.svg'
import sup3 from '../../assets/images/about/sup3.svg'

const Support = () => {
  return (
    <div className='bg-gradient-radial from-[#8a3ff240] via-[#070707] h-[70vh] md:h-[90vh] flex flex-col justify-center '>
      <div className='flex flex-col justify-center text-center items-center'>
        <h1 className='text-3xl font-bold py-2'>Meet Our Supporters</h1>
        <p className='text-[#888888] text-center'>At Finwise School, our success is fueled by the support and expertise of our valued partners.</p>
        <div className='flex flex-col  sm:flex-row justify-between items-center px-5 mt-6 w-[100%]'>
            <img src={sup1} className='my-3 md:w-[350px] grayscale brightness-200 hover:grayscale-0 duration-300 transition-all'></img>
            <img src={sup2} className='my-3 md:w-[350px] grayscale  brightness-200 hover:grayscale-0 duration-300 transition-all'></img>
            <img src={sup3} className='my-3 md:w-[350px] grayscale  brightness-200 hover:grayscale-0 duration-300 transition-all'></img>
        </div>
      </div>
    </div>
  )
}

export default Support
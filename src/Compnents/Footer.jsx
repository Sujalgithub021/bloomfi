import React from 'react'
import Bank from  "../img/Bank.png"

const Footer = () => {
  return (
    <div className='flex justify-between relative'>
      <div className=' w-120 h-70 ml-4 flex flex-col gap-10'>
        <p>USD bloom in Action</p>
        <h1 className='text-6xl'> Use cases</h1>
        <p>USD bloom offers a variety of use cases for <br />
        developers, businesses and treasuries seeking <br />
        secure and profitable stablecoin integrations.</p>
      </div>

      
      <div className=' w-120 h-140 mr-4'>
        <img src={Bank} alt="" className='z-0 opacity-70' />

        <div className=' absolute bottom-99 ml-4 flex flex-col gap-3'><h1 className='text-4xl'> Business</h1>
        <p>Boost user engagement by offering USD bloom, a secure <br />
        flat-backed stablecoin with high yields, allowing your <br />
        customers to earn effortlessly on your platform.</p>
        <i class="ri-arrow-right-line"> Learn more</i></div>
      </div>
    </div>
  )
}

export default Footer

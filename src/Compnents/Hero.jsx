import React from 'react'
import HeroImg from '../img/heros.png'

const Hero = () => {
  return (
    <div className='overflow-hidden w-full h-screen relative px-4 mt-5  '>

      <img src={HeroImg} alt="" className='w-full h-165 object-bottom rounded-3xl z-0'/>

      <div  className=' absolute bottom-130 z-20 flex flex-col items-center text-center justify-center inset-0'>

        <h1 className='text-6xl font-bold text-black'>
            Where Money Grow
        </h1>
        <p className='absolute -bottom-4 text-lg'>
            A programmable, utility-driven stable token <br />
            designed for native value accrual and seamless <br />
            integration into DeFi.
        </p>
        <button className='bg-black absolute -bottom-15 rounded-3xl text-xl py-1 px-3 text-white'>Try it now</button>
      </div>
    </div>
  )
}

export default Hero

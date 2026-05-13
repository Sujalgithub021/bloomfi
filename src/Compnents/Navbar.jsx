import React from 'react'
import Bootstrap from '../img/bootstrap.png'

const Navbar = () => {
  return (
    <div className='mt-4 ml-4 mr-4 flex justify-between'>
      <img src={Bootstrap} alt="bloomfi" className='h-10 w-10 '/>

      <div className='flex justify-center items-center gap-10 text-xl'>
        <span>Home</span>
        <span>About</span>
        <span>Contact Us</span>
        <span>Developer</span>
        <span>Join Us</span>
      </div>
      <div className='flex justify-center items-center'>
        <button className='bg-purple-900 p-1 rounded-3xl px-5'>LaunchBETA</button>
      </div>
    </div>
  )
}

export default Navbar

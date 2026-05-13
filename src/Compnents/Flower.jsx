import React from 'react'
import flower from '../img/flower.png'

const Flower = () => {
  return (
    <div className='ml-4 mr-4 flex justify-between '>
      <div className='bg-amber-900 h-80 w-180 relative'>


        <img src={flower} alt=""  className='h-80 w-180 object-fit'/>
        <h3 className='ml-4 text-3xl font-bold top-5 absolute'>Capital that grows</h3>

        <p className='absolute bottom-3 ml-4 text-xl'>Earn passive income as your stablecoins <br />
        are deployed into high-performing DeFi <br />
        protocols</p>
      </div>


      <div className='h-80 w-180 flex justify-between'>
        <div className='bg-purple-950 text-white h-80 w-85 flex flex-col justify-between rounded-3xl'>
            <h3 className='text-3xl ml-4 mt-4'>
                Always liquid,<br />
                always stable
            </h3>
            <p className='ml-4 mb-4'>
                Stay fully dollar-pegged with <br />
                instant access to your funds - <br />
                no lockups or delays.
            </p>
        </div >
        <div className='bg-purple-950 text-white flex flex-col justify-between h-80 w-85 rounded-3xl'>
            <h3 className='text-3xl ml-4 mt-4'>100% <br />
            hands-free</h3>
            <p className='ml-4 mb-4'>
                No need to manage strategies <br />
                manually. USD Bloom works <br />
                in the background for you.
            </p>
        </div>
      </div>
    </div>
  )
}

export default Flower

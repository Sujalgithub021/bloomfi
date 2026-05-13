import React from 'react'

const WhatIs = () => {
  return (
    <div className=' w[100%] h-50 ml-4 mr-4'>

        <div className='absolute flex items-center justify-center flex-col gap-3'>
            <h1 className='text-6xl'>What is USD Bloom?</h1>
            <button className='absolute bg-purple-900 rounded-3xl px-5 py-2 top-20 left-1'>Explore now</button>
        </div>

        <div className='flex justify-end'>
            <h3 className='text-3xl'>
                USD Bloom is a Yield-bearing <br />
                stablecoin that helps your capital <br />
                grow while staying pegged to the <br />
                U.S.dollar.
            </h3>
        </div>
      
    </div>
  )
}

export default WhatIs

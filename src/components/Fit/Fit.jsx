/* eslint-disable no-unused-vars */
import React from 'react'
import { NavLink } from 'react-router-dom'

const Fit = () => {
  return (
    <>
        <div className='flex items-center justify-center md:h-[500px]'>
              <div className='flex justify-between items-center flex-col md:flex-row gap-2 md:gap-10'>
                  <img src="https://cdn.shopify.com/s/files/1/0231/2060/9358/files/3bccbbff75f9d71ba70838c90a8345dcf5e22dda-948x803.jpg?v=1720815746&width=2000&height=1694&crop=center" alt="" className='md:w-[474px] w-[300px] h-[300px] md:h-[400px] rounded-3xl' />
                  <div className='md:w-[500px] px-4 md:px-0 py-4 md:py-10 w-[400px]'>
                      <h3 className='text-3xl font-normal py-2 text-gray-900'>Work. Fun. Daily Sprints. All in the same shoes</h3>
                      <p className='text-xl py-2 text-gray-800 pb-10'>Aurous shoes are versatile, durable and super support. They’re your perfect pair for hectic days, last-minute flights, and relaxing walks.</p>
                      <NavLink className='bg-gray-900 text-white rounded-3xl px-5 py-3 text-sm md:text-xl hover:bg-gray-800'>Find Your Fit</NavLink>
                  </div>
            </div>
        </div>
    </>
  )
}

export default Fit
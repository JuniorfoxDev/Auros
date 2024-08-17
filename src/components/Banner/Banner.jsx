import React from 'react'
import './Banner.css'
import { NavLink } from 'react-router-dom'
const Banner = () => {
  return (
      <div className=' bg-[#F2F2F2] mx-10 my-4 py-3 md:mx-28 md:my-6 md:h-[650px] rounded-lg'>
          <div className='flex items-center justify-center flex-col'>
          <img src="https://cdn.shopify.com/s/files/1/0231/2060/9358/files/Model001-white-HeroAngle-4x5-3000px-v3_1.jpg?v=1711648982&width=600&height=600&crop=center" alt="" className='md:h-[450px] h-[200px] w:[200px] md:w-[450px] animate-bounce-slow' />
          <h4 className='sr text-2xl md:text-4xl pb-6 pt-6'>Light as a cloud</h4>
          <p className='text-sm md:text-base text-gray-800 font-medium pb-6'>All day comfort. All summer long.</p>
          <NavLink className='bg-black text-white rounded-3xl px-5 py-2 text-sm md:text-lg'>
            Shop Now
          </NavLink>
        </div>
    </div>
  )
}

export default Banner

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const ProductCard = ({images,name,price}) => {
    return (
    <NavLink>
      <div className='overflow-hidden transform duration-300 cursor-pointer hover:scale-95 px-4'>
      <img src={images} alt="" className='rounded-lg w-[400px] h-[400px]'/>
      <div className='p-2 md:p-4 text-black/[0.9]'>
        <h2 className='text-sm md:text-base font-semibold'>{name}</h2>
        <div className='flex items-center text-black/[0.5]'>
        <p className='mr-2 text-lg font-bold'>&#8377; {price}</p>
        {/* <p className='text-base font-medium line-through'>&#8377; {old_price}</p> */}
        </div>
      </div>
      </div>
    </NavLink>
  )
}

export default ProductCard

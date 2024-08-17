/* eslint-disable no-unused-vars */
import React from 'react'
import product_data from '../../assets/Data'
import ProductCard from '../../components/ProductCard/ProductCard'

const AllProd = () => {
  return (
    <div className='h-auto pt-4 pb-24 px-6 px-2 md:px-48'>
      <div className='flex justify-between '>
          <h2 className='text-2xl font-bold '>Shoes</h2>
          <div className='flex items-center'>
            <label className='mr-2'>Sort By: </label>
            <select className='block text-center text-sm text-gray-600 border-none outline-none rounded-lg'>
              <option value="">Featured</option>
              <option value="">Best Selling</option>
              <option value="">Price:low to High</option>
            <option value="">Price:High to Low</option>
            </select>
          </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10  md:px-0'>
        {product_data.map((items, i) => {
          return <ProductCard key={i} id={items.id} name={items.name} img={items.img} price={items.price} old_price={items.old_price} />
        })}
      </div>
    </div>
  )
}

export default AllProd
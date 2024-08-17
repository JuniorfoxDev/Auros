/* eslint-disable no-unused-vars */
import React from 'react'
import product_data from '../../assets/Data'
import ProductCard from '../ProductCard/ProductCard'
import { NavLink } from 'react-router-dom'

const Products = () => {
  return (
    <div className='h-auto px-3 md:px-28 py-14'>
        <h2 className='text-3xl font-bold  py-6'>All Products</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10 md:px-0'>
        {product_data.slice(0,7).map((items,i)=> {
            return <ProductCard key={i} id={items.id} name={items.name} img={items.img} price={items.price} old_price={items.old_price} />
        })}
        </div>
        <div className='text-center'>
        <NavLink to='/all-product'>
            <button className='bg-black text-white px-10 py-3 rounded-full text-xl hover:bg-black/[0.9]'>See All</button>
        </NavLink>
        </div>
    </div>
  )
}

export default Products
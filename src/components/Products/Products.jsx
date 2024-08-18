/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import product_data from '../../assets/Data'
import ProductCard from '../ProductCard/ProductCard'
import { NavLink } from 'react-router-dom'

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
}, []);
  const fetchProducts = async () => {
    try {
        const response = await fetch(`https://ec-backend-server.vercel.app/products`);
        const data = await response.json();
        console.log(data);
        if (data) {
            setProducts(data);
        } else {
            setProducts([]);
        }
        setLoading(false);
    } catch (error) {
        console.error(error);
        setLoading(false);
    }
};

  return (
    <div className='h-auto px-3 md:px-28 py-14'>
        <h2 className='text-3xl font-bold  py-6'>All Products</h2>
        {loading ? (
                    <p>Loading...</p>
                ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10 md:px-0'>
        {products.slice(0,7).map(product => {
            <div className='overflow-hidden transform duration-300 cursor-pointer hover:scale-95 px-4'>
            <img src={product.images[0].url} alt="" className='rounded-lg w-[400px] h-[400px]'/>
            <div className='p-2 md:p-4 text-black/[0.9]'>
              <h2 className='text-sm md:text-base font-semibold'>{product.name}</h2>
              <div className='flex items-center text-black/[0.5]'>
              <p className='mr-2 text-lg font-bold'>&#8377; {product.price}</p>
              {/* <p className='text-base font-medium line-through'>&#8377; {old_price}</p> */}
              </div>
            </div>
            </div>
        })}
        </div>
          )}
        <div className='text-center'>
        <NavLink to='/all-product'>
            <button className='bg-black text-white px-10 py-3 rounded-full text-xl hover:bg-black/[0.9]'>See All</button>
        </NavLink>
        </div>
    </div>
  )
}

export default Products
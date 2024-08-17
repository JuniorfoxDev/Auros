/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import product_data from '../../assets/Data'
import ProductCard from '../ProductCard/ProductCard'
import { NavLink } from 'react-router-dom'

const Products = () => {
  const [products, setProducts] = useState([]);
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
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10 md:px-0'>
        {products.slice(0,7).map((items,i)=> {
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
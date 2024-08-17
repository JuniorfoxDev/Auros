/* eslint-disable no-unused-vars */
import React from 'react'
import product_data from '../../assets/Data'
import ProductCard from '../ProductCard/ProductCard'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'
const New = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items:4,
    },
    tablet: {
      breakpoint: { max: 1023, min: 464 },
      items:4,
    },
    mobile: {
      breakpoint: { max: 723, min: 0 },
      items:1,
    }
  }
  return (
    <div className='new bg-gray-100 px-4'>
      <h1 className='py-4 px-6 text-3xl font-semibold'>New Arrival</h1>
        <Carousel 
          responsive={responsive}
        itemClass='max-w-[400px]'
        >
        {product_data.slice(0,5).map((items,i)=> {
            return <ProductCard key={i} id={items.id} name={items.name} img={items.img} price={items.price} old_price={items.old_price}/>
        })}
        </Carousel>
    </div>
  )
}

export default New

import React from 'react'
import ProductCard from './ProductCard'
import { useAppContext } from '../context/AppContext'

const Bestseller = () => {

    const {products} = useAppContext();
  return (
    <div className='mt-6 '>
        <p className='text-2xl md:text-3xl font-medium'>Best Seller</p>
        <div className='grid grid-cols-1 place-items-center sm:grid-cols-3 md:grid-cols-3 gap-3 md:gap-6 lg:grid-cols-5 mt-6' >
            {products.filter((product)=> product.inStock).slice(0,5).map((product,index) => (
                <ProductCard key={index} product={product}/>
        ))}

           {/* <ProductCard product={products[0]}/> */}  
        </div>
    </div>
  )
}

export default Bestseller
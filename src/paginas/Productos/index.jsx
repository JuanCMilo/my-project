import React, { useEffect, useState } from 'react';
import ProductCard from '../../Components/ProductCard';
import Categories from '../../Components/Categories';

const Products = () => {
  const [products,setProduct] =useState([])
   useEffect(() =>{
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            console.log(data)
            setProduct(data)
    }
    fetchProducts()
   },[])
 
  return (
    <div>
      <Categories/>
      <div className='flex flex-col text-center w-full mt-20'>
      <h2 className='text-xs text-purple-500 tracking-widest font-medium title-font mb-1'>PRODUCTOS</h2>
      <h1 className='sm:text-3xl text-2xl font-medium title-font text-gray-900'>TODOS LOS PRODUCTOS</h1>
    </div>
      {
        products.length > 0 ?
        <ProductCard products={products} />
        :
        <h1 className='mt-20'>CARGANDO...</h1>        

      }
   
    </div>
  )
}

export default Products;

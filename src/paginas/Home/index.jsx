import React, { useEffect, useState } from 'react'
import Hero from '../../Components/Hero'
import ProductCard from '../../Components/ProductCard'
import Stats from '../../Components/StatCard'
import Categories from '../../Components/Categories'



const Home = () => {
   const [products,setProduct] =useState([])
   useEffect(() =>{
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products?limit=8')
            const data = await response.json()
            console.log(data)
            setProduct(data)
    }
    fetchProducts()
   },[])


  return (
    <>
    <Hero/>
    <Categories/>
    <div className='flex flex-col text-center w-full mt-20'>
      <h2 className='text-xs text-purple-500 tracking-widest font-medium title-font mb-1'>PRODUCTOS</h2>
      <h1 className='sm:text-3xl text-2xl font-medium title-font text-gray-900'>¡LO MÁS NUEVO!</h1>
    </div>
    {
      products.length > 0 ?
      <ProductCard products={products}/>
      :
      <div className='mt-20'>Cargando...</div>
    }
    <ProductCard/>
    <Stats/>
   
    </>
  )
}

export default Home

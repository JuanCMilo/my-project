import React from 'react';
import './App.css'
import Navbar from './Components/Navbar'
import Home from './paginas/Home'
import Footer from './Components/Footer'
import { Routes, Route } from 'react-router-dom'
import Product from './paginas/Product'
import Products from './paginas/Productos';
import CategoryProducts from './paginas/CategoryProducts';
import Cart from './paginas/Cart';



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/:id' element={<Product />} />
        <Route path='/products' element={<Products />} />
        <Route path='/categories/:name' element={<CategoryProducts />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<div className='mt-20'>404 Not Found</div>} />

      </Routes>
      <Footer />

    </>
  )
}

export default App

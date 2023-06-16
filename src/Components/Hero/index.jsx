import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductsWithMaxRate = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();

        const maxRate = Math.max(...products.map(product => product.rating.rate));
        const productWithMaxRate = products.find(product => product.rating.rate === maxRate);

        setProduct(productWithMaxRate);
      } catch (error) {
        console.log('Error fetching products:', error);
      }
    };

    fetchProductsWithMaxRate();
  }, []);

  const handleCart = (product, redirect) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const isProductExist = cart.find(item => item.id === product.id);
    if (isProductExist) {
      const updatedCart = cart.map(item => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + 1
          };
        }
        return item;
      });
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    } else {
      localStorage.setItem('cart', JSON.stringify([...cart, { ...product, quantity: 1 }]));
    }
    alert('Producto añadido al carrito');
    if (redirect) {
      navigate('/cart');
    }
  };

  return (
    <section className='text-gray-600 body-font mt-10'>
      <div className='container mx-auto flex px-5 py-24 items-center justify-center flex-col'>
        {product && (
          <img className='lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded' alt='hero' src={product.image} />
        )}
        <div className='text-center lg:w-2/3 w-full'>
          <h2 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>¡Best seller!</h2>
          <h6 className='title-font sm:text-2xl text-3xl mb-4 font-medium text-gray-900'>
            {product ? product.title : 'Loading...'}
          </h6>
          <p className='mb-8 leading-relaxed text-xl'>${product ? product.price : ''}</p>
          <div className='flex justify-center'>
            <button className='inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg' onClick={() => handleCart(product, true)}>Comprar Ya</button>
            <button className='ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg' onClick={() => handleCart(product)}>Añadir al carrito</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

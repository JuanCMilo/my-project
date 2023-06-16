import React, { useEffect, useState } from 'react';

const Stats = () => {
  const [productCount, setProductCount] = useState(0);
  const [averagePrice, setAveragePrice] = useState(0);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
      
        setProductCount(data.length);

       
        const totalPrice = data.reduce((acc, product) => acc + product.price, 0);
        const avgPrice = totalPrice / data.length;
        setAveragePrice(avgPrice.toFixed(2));
      })
      .catch((error) => {
        console.log('Error fetching product data:', error);
      });
  }, []);

  return (
    <section className='text-gray-600 body-font'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-wrap -m-4 text-center'>
          <div className='p-4 sm:w-1/4 w-1/2'>
            <h2 className='title-font font-medium sm:text-4xl text-3xl text-gray-900'>{productCount}</h2>
            <p className='leading-relaxed'>Productos</p>
          </div>
          <div className='p-4 sm:w-1/4 w-1/2'>
            <h2 className='title-font font-medium sm:text-4xl text-3xl text-gray-900'>2.7K</h2>
            <p className='leading-relaxed'>Users</p>
          </div>
          <div className='p-4 sm:w-1/4 w-1/2'>
            <h2 className='title-font font-medium sm:text-4xl text-3xl text-gray-900'>1.8K</h2>
            <p className='leading-relaxed'>Subscribes</p>
          </div>
          <div className='p-4 sm:w-1/4 w-1/2'>
            <h2 className='title-font font-medium sm:text-4xl text-3xl text-gray-900'>{averagePrice}</h2>
            <p className='leading-relaxed'>Precio promedio</p>
          </div>
        </div>
      </div>
    </section>
  )
}


export default Stats

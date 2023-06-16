import React from 'react'
import { Link } from 'react-router-dom';

const ProductCard = ({ products = [] }) => {
    return (
        <section className='text-gray-600 body-font mt-auto -mb-20 '>
            <div className='container px-5 py-24 mx-auto'>
                <div className='flex flex-wrap '>
                    {
                        products.map((product) => {
                            console.log(product, 'product')
                            const {id, title, price, description, category, image, raiting } = product;
                            return (
                                <Link to={`/products/${id}`} className='lg:w-1/4 md:w-1/2 p-6 w-full cursor-pointer'>
                                    <a className='block relative h-48 rounded overflow-hidden'>
                                        <img alt= {title} className='object-contain object-center w-full h-full block z-0' src=
                                    {image} />
                                    </a>
                                    <div className='mt-4'>
                                        <h3 className='text-gray-500 text-xs tracking-widest title-font mb-1'>{category}</h3>
                                        <h2 className='text-gray-900 title-font text-lg font-medium'>{title}</h2>                                        
                                        <div>{raiting}</div>
                                        <p className='mt-3 text-right mr-5 text-xl '>${price}</p>

                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default ProductCard

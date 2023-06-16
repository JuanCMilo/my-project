import React from 'react'
import { Link } from 'react-router-dom'

const FeatureCard   = ({ cards = [1, 2, 3] }) => {
    return (
        <section className='text-gray-600 body-font mt-5'>
            <div className='container px-5 py-24 mx-auto'>
                <div className='flex flex-col text-center w-full mb-20'>
                    <h2 className='text-s text-purple-500 tracking-widest font-medium title-font mb-1'>Productos</h2>
                    <h1 className='sm:text-3xl text-2xl font-medium title-font text-gray-900'>Nuestras categorias</h1>
                </div>
                <div className='flex flex-wrap -m-4'>
                    {
                        cards?.map((card) => {
                            return (
                            <Link to={`/categories/${card}`} className='p-4 md:w-1/4 justify-center cursor-pointer'>
                                <div className='flex  rounded-lg align-cenet h-full bg-gray-100 p-8 flex-col'>
                                    <div className='flex  mb-3 justify-center'>                                       
                                        <h2 className='text-gray-900 text-lg title-font font-medium capitalize'>{card || 'Example card'}</h2>
                                    </div>
                                    <div className='flex-grow'>                                       
                                        <a className='mt-3 text-purple-500 inline-flex items-center'>Learn More
                                            <svg fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' className='w-4 h-4 ml-2' viewBox='0 0 24 24'>
                                                <path d='M5 12h14M12 5l7 7-7 7'></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </Link>)
                        })
                    }


                </div>
            </div>
        </section>

    )
}

export default FeatureCard 

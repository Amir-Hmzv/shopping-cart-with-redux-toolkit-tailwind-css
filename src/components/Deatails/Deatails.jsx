import React from 'react';
import {  useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';


const Deatails = () => {
    const {id} = useParams()
    const items = useSelector(state => state.shop.items)

    const data = items[id - 1];

    const {image,description,category,title,price} = data
   
    
  
    return (
        <div className='bg-white border-[#d4d4d4] rounded-md  border-[1px] p-5 w-3/4 mx-auto  my-[6%]'>
            <div className='flex md:justify-between flex-col md:flex-row  p-15 space-x-5 '>
                <div  className='flex items-center w-800px'>
                    <img className='w-[100%] lg:w-[100%] h-auto' src={image} alt="img" />
                </div>
            <div className='flex items-center'>
            <div className='md:border-[#d4d4d4]  md:border-[1px]  md:min-h-36 space-y-24 p-4   rounded-lg'>
                    <div className='space-y-16'>
                    <h2 className='f font-extrabold text-gray-700'>{title}</h2>
                    <p className='font-bold text-blue-600'>{description}</p>
                    <p> <span className='font-bold  text-yellow-300'>category</span> : {category}</p>
                    </div>
                    <div className='flex justify-between'>
                    
                    <span  className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">{price} $</span>

                 
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><Link to={'/'}>Back To Shop</Link></button>

                   
                </div>
                </div>
            </div>
             
            </div>
        </div>
    );
};

export default Deatails;
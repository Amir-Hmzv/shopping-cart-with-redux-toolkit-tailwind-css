import React from 'react';
import {BiPlusMedical} from 'react-icons/bi'
import {FaMinus,FaTrash} from 'react-icons/fa'

import { useDispatch, useSelector } from 'react-redux';
import { shorten } from '../../helper/guide';
import {decrease, increase,removeItem} from '../../redux/shop movements/movementsSlice'
const BasketItems = ({selectedItems}) => {

        const {image,price,title,quantity} = selectedItems
        const dispatch =  useDispatch()
        // const state = useSelector(state => state.movements)
       
    
    return (
        <>
           <div className='flex justify-center my-[5.8%] sm:ml-20  lg:ml-0'>
          <div className='border border-[#cfcccc] bg-white p-5 rounded-lg'>
              <div className='w-[20rem] sm:h-[180px] space-y-8 sm:space-y-0 flex-col sm:w-[25rem]  md:w-[35rem] sm:flex-row lg:w-[40rem] flex justify-between items-center '>
                  <div className=''>
                      <img className='w-[150px] h-auto object-cover  ' src={image} alt="" />
                  </div>
                  <div>
                      <div className='text-blue-600 font-bold text-lg'>{shorten(title)}</div>
                      <div className='text-lg text-green-400 font-bold text-center'>{price}$</div>
                  </div>
                  <div>
                      <p className='bg-yellow-300 px-3 py-1 rounded-full text-white font-bold'>{quantity}</p>
                  </div>
                  <div className='s space-x-3'>
                      <button onClick={() => dispatch(increase(selectedItems))} className='bg-blue-500 hover:bg-blue-600 text-white  px-4 py-2    rounded-full'><BiPlusMedical/></button>
                      {quantity > 1 ? <button onClick={() => dispatch(decrease(selectedItems))}  className='bg-red-700 hover:bg-red-800 text-white  px-4 py-2    rounded-full'><FaMinus /></button> :
                      <button  onClick={() => dispatch(removeItem(selectedItems))} className='bg-red-700 hover:bg-red-800 text-white  px-4 py-2    rounded-full'><FaTrash /></button> }
                  </div>
              </div>
          </div>
         
        </div>   
        </>
    );
};

export default BasketItems;
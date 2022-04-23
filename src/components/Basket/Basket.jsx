import React from 'react';

import {useSelector,useDispatch} from 'react-redux'
import BasketItems from '../BasketItems/BasketItems';
import {clear,checkout} from '../../redux/shop movements/movementsSlice'
import { Link } from 'react-router-dom';

const Basket = () => {
    const selectedItems = useSelector(state => state.movements.selectedItems)
    const itemsCounter = useSelector(state => state.movements.itemsCounter)
    const total = useSelector(state => state.movements.total)
    const checkouts = useSelector(state => state.movements.chekout)
    const dispatch = useDispatch()

    console.log(selectedItems);
    
    return (
        <>
       <div className='max-w-[1280px] mx-auto  flex justify-center flex-col sm:flex-row  '>
           <div className=''>
           {
            selectedItems.map(item => <BasketItems key={item.id} selectedItems={item} />)
        }
       
           </div>
            {
                itemsCounter > 0 &&  <div className='sm:w-[400px] mt-15   h-[223px] flex justify-center   '>
                <div className='sm:border px-5   sm:border-[#cfcccc] m-10 bg-white  rounded-lg '>
                <div className='py-5 px-2 '>
                 <p className='font-bold text-blue-500 '>Total Items : <span className='text-gray-400'> {itemsCounter}</span> </p>
                 <p className='font-bold text-blue-500'>Total Payments : <span className='text-gray-400'>{total.toFixed(0)}$</span> </p>
                </div>
                <div className='flex justify-between  '>
                <button onClick={() => {dispatch(checkout())}} type="button" class="ml-2 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg  dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">checkout</button>
                    <button onClick={() => {dispatch(clear())}} type="button" class="text-white bg-gradient-to-r  from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg sh dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">clear</button>
 
                </div>
                </div>
             
            </div>
            }
            {
                itemsCounter == 0 && !checkouts && <div className='sm:w-[400px] mt-15   h-[223px] flex justify-center   '>
                <div className='sm:border px-5   sm:border-[#cfcccc] m-10 bg-white  rounded-lg '>
                <div className='py-5 px-2 '>
                    <p>do you want to buy?</p>
                </div>
                <div className='flex justify-center  '>
                    <Link to={'/'}  type="button" class="text-white bg-gradient-to-r  from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg sh dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">go to shop</Link>
 
                </div>
                </div>
             
            </div>
            }

            {
                checkouts  &&   <div className='sm:w-[400px] mt-15   h-[223px] flex justify-center   '>
                <div className='sm:border px-5   sm:border-[#cfcccc] m-10 bg-white  rounded-lg '>
                <div className='py-5 px-2 '>
                    <p className='text-green-300'>checkout was successfuly </p>
                </div>
                <div className='flex justify-center  '>
                    <Link to={'/'}  type="button" class="text-white bg-gradient-to-r  from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg sh dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Buy more</Link>
 
                </div>
                </div>
             
            </div>
            }
       </div>
    
        
     
        </>
            
        
    );
};

export default Basket;
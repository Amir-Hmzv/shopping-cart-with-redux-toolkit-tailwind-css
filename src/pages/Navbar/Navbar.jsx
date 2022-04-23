import React from 'react';
import {FaShoppingBag} from 'react-icons/fa'
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
const Navbar = () => {
  const counter = useSelector(state => state.movements.itemsCounter)
    return (
      <div className='fixed w-screen'>
            <div className='font-sans  shadow-lg     bg-blue-500 '>
         <div className='max-w-[1280px] sm:max-w-[1024px]  md:max-w-[768px]  lg:max-w-[1280px]   mx-auto flex md:justify-between justify-around items-center h-[60px] '>
             <div className='brand'>
                <Link to={'/'} className='t font-bold text-xl text-slate-200 border-b-2'>Products</Link>
             </div>

             <div className='flex   relative'>
               <Link to={'/basket'}> <FaShoppingBag className='c text-slate-200 text-2xl '/>
                <span className='px-[6px] py-[1px]  text-[12px] bg-white text-slate-600 rounded-3xl flex item-center absolute bottom-[10px] left-[16px]'>{counter}</span></Link>
            </div>
         </div>

        </div>
      </div>
    );
};

export default Navbar;
import React from 'react';
import {Route,Routes,Navigate} from 'react-router-dom'
import Basket from '../../components/Basket/Basket';
import Deatails from '../../components/Deatails/Deatails';
import Products from '../../components/Products/Products';

const Main = () => {
    return (
        <div className='pt-[60px] min-h-[90vh]'> 
        <Routes>
            <Route path='/products' element={<Navigate to={'/'}/>}/>
            <Route path='/' element={<Products/>}/>
            <Route path='/products/:id' element={<Deatails/>}/>
            <Route path='/basket' element={<Basket/>} />
        </Routes>
      
        </div>
    );
};

export default Main;
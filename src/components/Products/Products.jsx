import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/shopping cart/shoppingSlice';
import Loading from '../Loading/Loading';
import Store from '../Store/Store';

const Products = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        if (!products.items.length) {
            dispatch(getProducts())
        }
    }, [])
    const products = useSelector(state => state.shop)
        console.log(products);
    return (
        <>
            {
                products.loading ? <Loading/> : products.error ? <p>{products.error}</p> :  <div className='grid grid-cols-1  gap-4 p-5 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-4 mx-auto '>{products.items.map(item => {
                    return <Store key={item.id} productsData={item} />
                })}</div>
                })
            
        </>
    );
};

export default Products;
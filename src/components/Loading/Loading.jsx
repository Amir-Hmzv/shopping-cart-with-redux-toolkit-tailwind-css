import React from 'react';
import loading from '../../assets/Loading2.gif'
const Loading = () => {
    return (
        <div className='flex justify-center items-center h-[80vh]'>
            <img src={loading} alt="Loading" />
        </div>
    );
};

export default Loading;
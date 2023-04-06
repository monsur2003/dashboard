import React from 'react';
import Feature from '../Feature/Feature';

const SinglePrice = ({ price }) => {
    // console.log(price);
    return (
        <div className='bg-blue-400 border border-pink-500 rounded-lg p-4 w-[400px] h-[420px] mt-11  shadow-lg shadow-blue-600 flex flex-col '>
            <h2 className='text-center'>
                <span className='text-4xl font-extrabold text-pink-500'>{price.price}</span>
                <span className='text-lime-50 text-2xl'>/mon</span>
            </h2>
            <h2 className='text-2xl font-bold text-center my-3'>{price.name}</h2>
            <p className='text-[18px] font-bold underline text-white'>Features</p>
            {
                price.features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
            }
            <button className='btn mt-auto  w-full py-3 my-3 bottom-0 bg-green-600 text-white rounded-lg font-semibold hover:bg-pink-500'>Buy Now</button>
        </div>
    );
};

export default SinglePrice;
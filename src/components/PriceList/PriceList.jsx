import React, { useEffect, useState } from 'react';
import SinglePrice from '../SinglePrice/SinglePrice';

const PriceList = () => {
    const [prices, setPrices] = useState([])
    // console.log(prices);
    useEffect(() => {
        fetch('Price.json')
            .then(res => res.json())
            .then(data => setPrices(data))
    }, [])
    return (
        <div className=''>
            <h2 className='border bg-gray-300 p-4 text-center text-4xl text-violet-600'>Awesome Affordable Price list {prices.length}</h2>
            <div className='grid w-[90%] mx-auto md:grid-cols-3 gap-2 '>
                {
                    prices.map(price => <SinglePrice key={price.id} price={price}></SinglePrice>)

                }

            </div>

        </div>
    );
};

export default PriceList;
import React, { useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Phone = () => {
    const [phones, setPhones] = useState([])
    axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const phones = data.data.data
            const phone = phones.map(phone => {
                const parts = phone.slug.split('-')
                const price = parseInt(parts[1])
                const phoneInfo = {
                    name: phone.phone_name,
                    price: price,

                }
                return phoneInfo
            })
            // console.log(phone);
            setPhones(phone)
        })
    return (
        <div>

            <BarChart width={800} height={400} data={phones}>

                <Bar dataKey='price' fill='blue'></Bar>
                <YAxis></YAxis>
                <Tooltip fill='pink'></Tooltip>
                <XAxis dataKey='name'></XAxis>
            </BarChart>

        </div>
    );
};

export default Phone;
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Sector, Cell, } from 'recharts';


const Dashboard = () => {
    const studentResults = [
        {
            name: "John",
            results: {
                math: 15,
                science: 75,
                history: 90
            }
        },
        {
            name: "Mary",
            results: {
                math: 55,
                science: 50,
                history: 20
            }
        },
        {
            name: "David",
            results: {
                math: 70,
                science: 30,
                history: 65
            }
        },
        {
            name: "Sophie",
            results: {
                math: 75,
                science: 20,
                history: 85
            }
        },
        {
            name: "Michael",
            results: {
                math: 40,
                science: 55,
                history: 60
            }
        },
        {
            name: "Emily",
            results: {
                math: 80,
                science: 75,
                history: 25
            }
        },
        {
            name: "Jack",
            results: {
                math: 35,
                science: 80,
                history: 60
            }
        },
        {
            name: "Sarah",
            results: {
                math: 80,
                science: 35,
                history: 40
            }
        },
        {
            name: "Adam",
            results: {
                math: 75,
                science: 90,
                history: 65
            }
        },
        {
            name: "Lucy",
            results: {
                math: 50,
                science: 20,
                history: 95
            }
        },
        {
            name: "Jacob",
            results: {
                math: 85,
                science: 90,
                history: 75
            }
        },
        {
            name: "Mia",
            results: {
                math: 95,
                science: 80,
                history: 40
            }
        },
        {
            name: "Oliver",
            results: {
                math: 90,
                science: 25,
                history: 80
            }
        },
        {
            name: "Emma",
            results: {
                math: 30,
                science: 75,
                history: 10
            }
        },
        {
            name: "Noah",
            results: {
                math: 75,
                science: 80,
                history: 45
            }
        },
        {
            name: "Ava",
            results: {
                math: 60,
                science: 55,
                history: 20
            }
        },
        {
            name: "William",
            results: {
                math: 20,
                science: 90,
                history: 85
            }
        },
        {
            name: "Isabella",
            results: {
                math: 40,
                science: 95,
                history: 75
            }
        },
        {
            name: "Ethan",
            results: {
                math: 85,
                science: 80,
                history: 30
            }
        },
        {
            name: "Chloe",
            results: {
                math: 10,
                science: 75,
                history: 80
            }
        }
    ];

    return (
        <div className='my-16 flex justify-center items-center'>
            <LineChart width={1000} height={300} data={studentResults}>
                <YAxis stroke='green'></YAxis>
                <Tooltip></Tooltip>
                <XAxis stroke='purple' dataKey='name'></XAxis>
                <Line dataKey='results.math' stroke='blue' ></Line>
                <Line dataKey='results.history' stroke='yellow'></Line>
                <Line dataKey='results.science' stroke='red' ></Line>
            </LineChart>
        </div>

    );
};

export default Dashboard;
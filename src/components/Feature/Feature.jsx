import React from 'react';
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const Feature = ({ feature }) => {
    return (
        <div className='flex items-center gap-x-2'>
            <CheckCircleIcon className='w-[15px] h-[15px] text-gray-500'></CheckCircleIcon>
            <span>
                {feature}
            </span>
        </div>
    );
};

export default Feature;
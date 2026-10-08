'use client';
import React, { useState } from 'react';

const Counter = () => {
    const [count,setCount] =useState(0);
    console.log('Counter component rendered');

    const handleIncrease = () => {
        console.log('Increase button clicked')
        setCount(count+1);
    }

    return (
        <div>
            <h2 className='text-4xl font-bold mb-4'>Counter:{count}</h2>
            <button
            onClick={handleIncrease}
                className='font-bold text-yellow-500 border-2'>
                Increase
            </button>
        </div>

    );
};

export default Counter;
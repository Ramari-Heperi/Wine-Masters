/* eslint-disable */
import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleClick = (event) => {
        setCount(count + 1);
    }
    return (

        <div className="onclick-btn">
            <button className="btn2" onClick={handleClick}>{count}</button>
        </div>

    );
};

export default Counter;
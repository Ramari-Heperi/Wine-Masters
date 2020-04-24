/* eslint-disable */
import React, { useState } from 'react';


const Counter = (props) => {

    const handleClick = (event) => {
        setCount(count + 1);
    }

    return (

        <div className="onclick-btn">
            <a className="btn btn-primary" href={`mailto:winemasters@gmail.com?subject= I would like to buy ${props.num} bottles` } >Buy {props.num} Now</a>

        </div>

    );
};

export default Counter;
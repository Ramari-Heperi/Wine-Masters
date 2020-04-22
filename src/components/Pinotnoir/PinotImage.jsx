/* eslint-disable */
import React from 'react';
import './PinotImage.css';

const PinotImage = (props) => {
    const { x, y } = props;
    const url = `http://source.unsplash.com/${x}x${y}/?Pakiri`;
    return (
        <div>
            <img className="img" src={url}></img>
        </div>
    );
};
export default PinotImage;



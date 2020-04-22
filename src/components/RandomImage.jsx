/* eslint-disable */
import React from 'react';
import './RandomImage.css';

const RandomImage = (props) => {
    const { x, y } = props;
    const url = `http://source.unsplash.com/${x}x${y}/?Pakiri`;
    return (
        <div>
            <img className="img" src={url}></img>
        </div>
    );
};
export default RandomImage;



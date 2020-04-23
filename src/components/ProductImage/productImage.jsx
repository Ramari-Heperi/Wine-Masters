/* eslint-disable */
import React from 'react';
import './PinotImage.css';

const productImage = (props) => {
    const { x, y, url } = props;

    return (
        <div>
            <img className="img" src={url} width={x} height={y} />
        </div>
    );
};
export default productImage;



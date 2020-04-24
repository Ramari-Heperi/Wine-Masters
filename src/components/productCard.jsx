/* eslint-disable */
import React from 'react';
import './productCard.css';
import ProductImage from './ProductImage/productImage';

const productCard = (props) => {
  const { productCard, cardButton, imageurl } = props;

  return (
    <div className="card">
      <ProductImage x={150} y={150} url={imageurl} />
      <p>{productCard}</p>
      {cardButton}
    </div >

  );
};

export default productCard;

/* eslint-disable */
import React from 'react';
import './Card.css';
import RandomImage from './RandomImage.jsx';

const Card = (props) => {
  const { cardText, cardButton } = props;

  return (
    <div className="card">
      <RandomImage x={320} y={200} />
      <p>{cardText}</p>
      {cardButton}
    </div>

  );
};

export default Card;

/* eslint-disable */
import React from 'react';
import './Card.css';


const Card = (props) => {
  const { cardText, cardButton } = props;

  return (
    <div className="Card">
      <RandomImage x={320} y={200} />
      <p className="card-Text">cardText</p>
      {cardButton}
    </div>

  )
};

export default Card;

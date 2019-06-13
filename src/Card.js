import React from 'react';

const Card = ({ card, index }) => {
  return (
    <div className='card'>
      {card.label}
    </div>
  );
}

export default Card;
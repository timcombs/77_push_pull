import React from 'react';
import ClickableImg from './ClickableImg';

import './styles/Card.css';

const Card = ({ card, index }) => {
  return (
    <div className='card'>
      <ClickableImg />
      {card.label}
    </div>
  );
}

export default Card;
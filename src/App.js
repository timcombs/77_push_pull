import React, { useState } from 'react';
import Card from './Card.js';

import './App.css';

function App() {
  const [cards, setCards] = useState([
    {
      img: 'placeholder1',
      label: 'card 1',
      isViewable: true
    },
    {
      img: 'placeholder 2',
      label: 'card 2',
      isViewable: true
    },
    {
      img: 'placeholder 3',
      label: 'card 3',
      isViewable: true
    },
    {
      img: 'placeholder4',
      label: 'card 4',
      isViewable: true
    },
    {
      img: 'placeholder 5',
      label: 'card 5',
      isViewable: true
    },
    {
      img: 'placeholder 6',
      label: 'card 6',
      isViewable: true
    }
  ])


  return (
    <div className="app">
      <div className='card-list'>
        {cards.map((card, index) => (
          <Card key={index}
            index={index}
            card={card}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

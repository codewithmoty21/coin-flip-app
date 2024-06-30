// src/components/CoinFlipper.js
import React, { useState } from 'react';
import Coin from './Coin';

const CoinFlipper = () => {
  const [side, setSide] = useState('heads');
  const [isFlipping, setIsFlipping] = useState(false);

  const flipCoin = () => {
    setIsFlipping(true);
    setTimeout(() => {
      const newSide = Math.random() > 0.5 ? 'heads' : 'tails';
      setSide(newSide);
      setIsFlipping(false);
    }, 1000);
  };

  return (
    <div>
      <h1>Coin Flipper</h1>
      <Coin side={side} isFlipping={isFlipping} />
      <button onClick={flipCoin} disabled={isFlipping}>
        {isFlipping ? 'Flipping...' : 'Flip Coin'}
      </button>
    </div>
  );
};

export default CoinFlipper;

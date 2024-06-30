// src/components/Coin.js
import React from 'react';
import headsImage from '../images/heads.png'; // Ensure you have an image for heads
import tailsImage from '../images/tails.png'; // Ensure you have an image for tails

const Coin = ({ side }) => {
  return (
    <div>
      <img src={side === 'heads' ? headsImage : tailsImage} alt={side} />
    </div>
  );
};

export default Coin;

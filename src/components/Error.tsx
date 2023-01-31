import React from 'react';
import Morty from '../assets/morty.png';
import './NotFound.css';

export default function Error() {
  return (
    <div className="not-found-container">
      <h1>Something went wrong, try again later!</h1>
      <img src={Morty} alt="morty scared" />
    </div>
  );
}

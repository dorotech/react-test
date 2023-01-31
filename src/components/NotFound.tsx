import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Rick from '../assets/rick.png';
import './NotFound.css';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="not-found-container">
      <h1>Page or character not found!</h1>
      <img src={Rick} alt="Rick can't undestand" />
      <Button size="large" variant="contained" onClick={() => { navigate('/'); }}>Go to homepage</Button>
    </div>
  );
}

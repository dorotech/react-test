import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.css';
import App from './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Character from './pages/Character';
import Search from './pages/Search';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />}/>
          <Route path='character/:id' element={<Character />}/>
          <Route path='search' element={<Search />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

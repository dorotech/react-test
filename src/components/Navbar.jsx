import React from 'react'
import {Link, useNavigate} from 'react-router-dom';
import {BiSearchAlt2} from 'react-icons/bi';
import logo from '../img/logo.png';
import { useState } from 'react';

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault()
    if(!search) return;

    navigate(`/search?q=${search}`);
    setSearch('');
  }
  return (
    <div>
      <nav className='navbar'>
        <h2>
          <Link to="/">
            <img src={logo} alt="Logo"/>
            Rick and Morty API
          </Link>
        </h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Busque um personagem' onChange={(e) => setSearch(e.target.value)} value={search}/>
          <button type='submit'><BiSearchAlt2 /></button>
        </form>
      </nav>
    </div>
  )
}

export default Navbar
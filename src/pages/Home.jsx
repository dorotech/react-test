import React from 'react';
import { useState, useEffect } from 'react';
import CharacterCard from '../components/CharacterCard';

const characterURL = 'https://rickandmortyapi.com/api/character';

const Home = () => {
  const [topCharacter, setTopCharacter] = useState([]);

  const getTopRatedCharacter = async(url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopCharacter(data.results);
  }

  useEffect(() => {
    const topRatedUrl = `${characterURL}`;
    
    getTopRatedCharacter(topRatedUrl);
    
  }, []);

  return (
    <div className='container'>
      <h2 className="title">Personagens</h2>
      <div className="characters-container">
        {topCharacter.length === 0 && <p>Carregando...</p>}
        {topCharacter.length > 0 &&
          topCharacter.map((character) => <CharacterCard key={character.id} character={character}/>)
        }
      </div>
    </div>
  )
}

export default Home
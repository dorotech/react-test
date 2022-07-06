import React from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import CharacterCard from '../components/CharacterCard';

const searchURL = 'https://rickandmortyapi.com/api/character/';

const Search = () => {
  const [searchParams] = useSearchParams();
  const [characters, setCharacters] = useState([]);
  const query = searchParams.get('q');
  
  const getSearchedCharacter = async(url) => {
    const res = await fetch(url);
    const data = await res.json();
    setCharacters(data.results);
  }

  useEffect(() => {
    const searchWithQueryURL = `${searchURL}?name=${query}`;
    
    getSearchedCharacter(searchWithQueryURL);
    
  }, [query]);

  return (
    <div className='container'>
      <h2 className="title">Resultado para: <span className='query-text'>{query}</span></h2>
      <div className="characters-container">
        {characters.length === 0 && <p>Carregando...</p>}
        {characters.length > 0 &&
          characters.map((character) => <CharacterCard key={character.id} character={character}/>)
        }
      </div>
    </div>
  )
}

export default Search
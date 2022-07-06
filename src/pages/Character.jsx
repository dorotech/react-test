import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {BiUserCircle, BiWorld, BiShow} from 'react-icons/bi';
import CharacterCard from '../components/CharacterCard';
const charactersURL = 'https://rickandmortyapi.com/api/character/';

const Character = () => {
  const {id} = useParams();
  const [character, setCharacter] = useState(null);
  const getCharacter = async(url) => {
    const res = await fetch(url);
    const data = await res.json();
    setCharacter(data);
  }

  useEffect(() => {
    const characterURL = `${charactersURL}${id}`;
    getCharacter(characterURL);
  }, []);

  return (
    <div className='character-page'>
      {character && (
        <>
          <CharacterCard character={character} showLink={false} />

          <p><BiShow /> Last known location: {character.location.name}</p>
          <p><BiUserCircle /> Gender: {character.gender}</p>
          <p><BiWorld /> Origem: {character.origin.name}</p>
        </>
      )}
    </div>
  )
}

export default Character
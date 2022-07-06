import React from 'react'
import {Link} from 'react-router-dom';
import {BiInfoCircle} from 'react-icons/bi';

const CharacterCard = ({character, showLink = true}) => {
  return (
    <div className='character-card'>
      <img src={character.image} alt={character.name} />
      <p className='name'>{character.name} - <span>#{character.id}</span></p>
      <p>
        <BiInfoCircle className={character.status}/> {character.status} - {character.species}
      </p>
      {showLink && <Link to={`/character/${character.id}`}>Detalhes</Link>}
    </div>
  )
}

export default CharacterCard
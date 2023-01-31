import React from 'react';
import { Character } from '../interfaces/Services';
import CharCard from './CharCard';

interface ListProps {
  characters: Character[];
}

export default function CharList({ characters }: ListProps) {
  return (
    <div className="charlist-container">
      {characters.map((character: any) => <CharCard key={character.id} character={character} />)}
    </div>
  );
}

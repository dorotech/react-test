import Image from 'next/image';

import { TCharacter } from '@/features/common/services/rick-morty/types';
import { useState } from 'react';
import { CharacterDetailsModal } from '../character-details-modal';

interface ICharacterList {
  characters: TCharacter[];
}

interface ICharacterItem extends TCharacter {
  onClick(): void;
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Alive':
      return 'bg-green-500';
    case 'Dead':
      return 'bg-red-500';
    case 'unknown':
      return 'bg-zinc-500 dark:bg-zinc-300';
    default:
      return 'bg-zinc-500 dark:bg-zinc-300';
  }
};

const CharacterItem = (props: ICharacterItem) => {
  return (
    <div
      onClick={props.onClick}
      data-testid="character-item"
      key={props.id}
      className="max-w-[10.625rem] w-fit flex flex-col gap-4 p-3 bg-gray-300 border border-gray-400 dark:border-zinc-700 dark:bg-zinc-800 rounded-md shadow-md cursor-pointer transition hover:-translate-y-1 hover:shadow-amber-500"
    >
      <Image
        alt={props.name}
        src={props.image}
        width={150}
        height={150}
        className="self-center object-contain rounded-lg"
      />

      <div>
        <h1 className="leading-[1] font-semibold overflow-hidden whitespace-nowrap overflow-ellipsis">
          {props.name}
        </h1>
        <div className="flex items-center gap-1">
          <div className={`w-2 h-2 rounded-full ${getStatusColor(props.status)}`} />
          <span className="dark:text-zinc-300">{props.status}</span>
        </div>
      </div>
    </div>
  );
};

export function CharacterList({ characters }: ICharacterList) {
  const [selectedCharacter, setSelectedCharacter] = useState<TCharacter>();

  return (
    <>
      <div
        data-testid="character-list"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(10.625rem, 10.625rem))' }}
        className="w-full max-w-[600px] grid items-start place-content-center gap-5"
      >
        {characters.map((character) => (
          <CharacterItem
            key={character.id}
            {...character}
            onClick={() => setSelectedCharacter(character)}
          />
        ))}
      </div>

      <CharacterDetailsModal
        character={selectedCharacter!}
        isOpen={!!selectedCharacter}
        onClose={() => setSelectedCharacter(undefined)}
      />
    </>
  );
}

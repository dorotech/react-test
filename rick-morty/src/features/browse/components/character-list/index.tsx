import Image from 'next/image';

import { TCharacter } from '@/features/common/services/rick-morty/types';

interface ICharacterList {
  characters: TCharacter[];
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Alive':
      return 'bg-green-500';
    case 'Dead':
      return 'bg-red-500';
    case 'unknown':
      return 'bg-zinc-300';
  }
};

const CharacterItem = (props: TCharacter) => {
  return (
    <div
      key={props.id}
      className="max-w-[170px] w-fit flex flex-col gap-4 p-3 bg-zinc-800 rounded-md shadow-md cursor-pointer transition hover:-translate-y-1 hover:shadow-amber-500"
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
          <span className="text-zinc-300">{props.status}</span>
        </div>
      </div>
    </div>
  );
};

export function CharacterList({ characters }: ICharacterList) {
  return (
    <div
      style={{ gridTemplateColumns: 'repeat(3, 170px)' }}
      className="grid items-start place-content-center gap-5"
    >
      {characters.map((character) => (
        <CharacterItem key={character.id} {...character} />
      ))}
    </div>
  );
}

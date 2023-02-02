import Image from 'next/image';
import { TCharacter } from '@/features/common/services/rick-morty/types';
import { Modal } from '@/features/common/components/modal';

interface ICharacterDetailsModal {
  isOpen: boolean;
  onClose(): void;
  character: TCharacter;
}

const Detail = ({ name, value }: { name: string; value: string | number }) => (
  <div className="flex flex-col">
    <span className="">{name}</span>
    <span className="py-1 px-3 bg-gray-400 dark:bg-zinc-900 rounded-lg text-center overflow-hidden whitespace-nowrap overflow-ellipsis">
      {value}
    </span>
  </div>
);

export function CharacterDetailsModal({ character, ...rest }: ICharacterDetailsModal) {
  if (!character) return null;

  return (
    <Modal {...rest}>
      <div className="relative flex flex-col gap-5 items-center justify-center">
        <div className="absolute -top-5 translate-y-[-100%] transition-all ease-out rounded-[50%] hover:rounded-lg border-[10px] border-gray-300 dark:border-zinc-800 dark:bg-zinc-800 bg-gray-300 overflow-hidden">
          <Image
            src={character.image}
            alt={character.name}
            className="object-contain rounded-lg"
            width={180}
            height={180}
          />
        </div>

        <h1 className="font-bold text-4xl">{character.name}</h1>

        <div className="w-full max-w-[400px] grid grid-cols-2 gap-5 place-content-center">
          <Detail value={character.status} name="Status" />
          <Detail value={character.gender} name="Gender" />
          <Detail value={character.species} name="Specie" />
          <Detail value={character.origin.name} name="Origin" />
          <Detail value={character.episode.length} name="Featured in" />
          <Detail value={new Date(character.created).toDateString()} name="Created at" />
        </div>
      </div>
    </Modal>
  );
}

import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { rickMortyService } from '../../services/rick-morty';
import { shuffle } from '../../utils/shuffle';

const useGetRandomCharacter = () => {
  const { data, isLoading } = useQuery({
    queryFn: rickMortyService.getCharacter,
  });

  const character = shuffle(data?.results || [])[1];

  return {
    isLoading,
    character,
  };
};

export function CharacterHead() {
  const { character, isLoading } = useGetRandomCharacter();

  if (isLoading) return null;

  return (
    <div className="self-center flex items-center gap-4">
      <Image
        src={character.image}
        className="object-contain rounded-lg border-2 border-zinc-600 shadow-md transition-all hover:scale-110"
        width={200}
        height={200}
        alt="Character head"
      />
    </div>
  );
}

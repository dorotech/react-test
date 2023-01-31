import { rickMortyService, TGetCharacter } from '@/features/common/services/rick-morty';
import { useQuery } from '@tanstack/react-query';

export const useCharacter = (query: TGetCharacter) =>
  useQuery(['CHARACTERS', query], {
    queryFn: () => rickMortyService.getCharacter(query),
    enabled: !!query,
    keepPreviousData: true,
  });

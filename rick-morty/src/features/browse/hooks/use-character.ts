import { useQuery } from '@tanstack/react-query';

import { useAppServiceContext } from '@/features/common/services/app-service-context';
import { TGetCharacter } from '@/features/common/services/rick-morty';

export const useCharacter = (query: TGetCharacter) => {
  const { rickMorty } = useAppServiceContext();

  return useQuery(['CHARACTERS', query], {
    queryFn: () => rickMorty.getCharacter(query),
    enabled: !!query,
    keepPreviousData: true,
  });
};

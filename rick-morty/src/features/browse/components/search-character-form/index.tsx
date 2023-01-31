import { Dispatch, SetStateAction } from 'react';
import { MagnifyingGlass } from 'phosphor-react';

import { TGetCharacter } from '@/features/common/services/rick-morty';
import { Input } from '@/features/common/components/input';

import { SearchFilters } from '../search-filters';

interface ISearchCharacterForm {
  query: TGetCharacter;
  setQuery: Dispatch<SetStateAction<TGetCharacter>>;
}

export function SearchCharacterForm({ setQuery, query }: ISearchCharacterForm) {
  return (
    <form className="self-center flex flex-col gap-6">
      <Input
        value={query.name}
        onChange={(e) => setQuery((state) => ({ ...state, name: e.target.value }))}
        type="text"
        placeholder="Search for a character"
        icon={<MagnifyingGlass size={20} weight="bold" />}
      />

      <Input
        value={query.species}
        onChange={(e) => setQuery((state) => ({ ...state, species: e.target.value }))}
        type="text"
        placeholder="Search for species: human, alien, etc.."
        icon={<MagnifyingGlass size={20} weight="bold" />}
      />

      <SearchFilters onChange={(inputs) => setQuery((state) => ({ ...state, ...inputs }))} />
    </form>
  );
}

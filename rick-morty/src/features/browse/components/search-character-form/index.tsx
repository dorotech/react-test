import { Dispatch } from 'react';
import { MagnifyingGlass } from 'phosphor-react';

import { TGetCharacter } from '@/features/common/services/rick-morty';
import { Input } from '@/features/common/components/input';

import { RadioFilter } from '../radio-filter';
import { GENDER, STATUS } from '../../constants/filter-options';
interface ISearchCharacterForm {
  query: TGetCharacter;
  setQuery: Dispatch<TGetCharacter>;
}

export function SearchCharacterForm({ setQuery, query }: ISearchCharacterForm) {
  return (
    <form role="search" className="self-center flex flex-col gap-6">
      <Input
        value={query?.name}
        onChange={(e) => setQuery({ name: e.target.value })}
        type="text"
        placeholder="Search for a character"
        icon={<MagnifyingGlass size={20} weight="bold" />}
      />

      <Input
        value={query?.species}
        onChange={(e) => setQuery({ species: e.target.value })}
        type="text"
        placeholder="Search for species: human, alien, etc.."
        icon={<MagnifyingGlass size={20} weight="bold" />}
      />

      <div className="flex items-center gap-4">
        <RadioFilter
          name="Status"
          value={query?.status}
          onChange={(status) => setQuery({ status })}
          options={STATUS}
        />

        <RadioFilter
          name="Gender"
          value={query?.gender}
          onChange={(gender) => setQuery({ gender })}
          options={GENDER}
        />
      </div>
    </form>
  );
}

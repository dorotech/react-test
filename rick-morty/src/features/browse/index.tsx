import { CircleNotch, X } from 'phosphor-react';
import { Button } from '../common/components/button';

import { CharacterList } from './components/character-list';
import { SearchCharacterForm } from './components/search-character-form';
import { useCharacter } from './hooks/use-character';
import { useQueryState } from './hooks/use-query-state';

export function Home() {
  const { query, setQuery, resetQuery } = useQueryState();
  const { data, isLoading, isError, isFetching } = useCharacter(query);

  const renderFetchingCharacters = () => {
    if (isLoading) {
      return (
        <div className="flex flex-col items-center gap-2 text-zinc-300">
          <CircleNotch size={32} className="animate-spin" />
          Fetching characters...
        </div>
      );
    }
  };

  const renderNotFoundQuery = () => {
    if (!isLoading && !data && isError) {
      return (
        <div className="flex flex-col items-center gap-2 text-zinc-300">
          <X size={32} />
          <span>Ops, nothing was found for this query.</span>

          <span>
            <Button className="bg-amber-500 text-white" onClick={resetQuery}>
              Reset Inputs
            </Button>
          </span>
        </div>
      );
    }
  };

  const renderResultInfos = () => {
    if (isLoading) return;

    return (
      <div className="text-zinc-400">
        {isFetching ? (
          <span className="">Fetching..</span>
        ) : (
          <span>
            Results found: {data?.info.count} | Showing: {data?.results.length}
          </span>
        )}
      </div>
    );
  };

  return (
    <main className="flex flex-col items-center gap-10">
      <SearchCharacterForm setQuery={setQuery} query={query} />
      {renderFetchingCharacters()}
      {renderNotFoundQuery()}
      {renderResultInfos()}
      <CharacterList characters={data?.results || []} />
    </main>
  );
}

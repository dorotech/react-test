import { CircleNotch, X } from 'phosphor-react';
import { Button } from '../common/components/button';
import { Pagination } from '../common/components/pagination';

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
        <div
          data-testid="loading-characters"
          className="flex flex-col items-center gap-2 text-zinc-300"
        >
          <CircleNotch size={32} className="animate-spin" />
          Fetching characters...
        </div>
      );
    }
  };

  const renderNotFoundQuery = () => {
    if (isError) {
      return (
        <div
          data-testid="not-found-message"
          className="flex flex-col items-center gap-2 text-zinc-300"
        >
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
    if (isLoading || isError || !data) return;

    return (
      <div data-testid="results-info" className="text-zinc-400">
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
      {!isLoading && !isError && <CharacterList characters={data?.results || []} />}

      {!!data?.info.count && (
        <Pagination
          pages={data.info.pages}
          current={query.page || 1}
          siblingQuantity={2}
          onNext={() => setQuery({ page: (query.page || 1) + 1 })}
          onPrev={() => setQuery({ page: (query.page || 1) - 1 })}
          onSetPage={(newPage) => setQuery({ page: newPage })}
        />
      )}
    </main>
  );
}

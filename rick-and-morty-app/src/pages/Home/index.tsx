import { useContext, useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import { PageContext } from '../../contexts/PageContext';

import Filter from '../../components/Filter';
import CharacterCard from '../../components/CharacterCard';
import { ArrowIcon, LoadingSpinnerIcon } from '../../components/Icons';

import { Container, List, Navigation } from './styles';

interface CharacterData {
  id: number,
  name: string,
  status: string,
  image: string,
}

type SearchData = {
  name?: string,
  status?: string,
  species?: string
}

export default function Home() {
  const {
    pageNumberContext, setFirstPageContext, handlePrevPageContext, handleNextPageContext,
  } = useContext(PageContext);

  const [characters, setCharacters] = useState<CharacterData[]>([]);
  const [loading, setLoading] = useState(true);
  const [maxPage, setMaxPage] = useState(1);

  const [searchParams, setSearchParams] = useSearchParams();
  const { search } = useLocation();
  const querySearch = search && search.substring(1);

  useEffect(() => {
    (async () => {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${pageNumberContext}&${querySearch}`);
      const responseJson = await response.json();

      setMaxPage(responseJson.info?.pages);
      setLoading(false);
      setCharacters(responseJson.results);
    })();
  }, [searchParams, pageNumberContext]);

  function handleChangeSearchParams(params: SearchData) {
    setLoading(true);
    setSearchParams(params);
    setFirstPageContext();
  }

  function handleNextPage() {
    setLoading(true);
    handleNextPageContext();
  }

  function handlePrevPage() {
    setLoading(true);
    handlePrevPageContext();
  }

  if (loading) {
    return (
      <Container>
        <Filter handleChangeSearchParams={handleChangeSearchParams} searchParams={searchParams} />
        <List>
          <LoadingSpinnerIcon />
        </List>
      </Container>
    );
  }

  return (
    <Container>
      <Filter handleChangeSearchParams={handleChangeSearchParams} searchParams={searchParams} />
      <Navigation>
        {pageNumberContext !== 1 && (
          <button type="button" onClick={handlePrevPage} className="navigation--prev">
            <ArrowIcon />
          </button>
        )}

        {pageNumberContext < maxPage && (
          <button type="button" onClick={handleNextPage} className="navigation--next">
            <ArrowIcon />
          </button>
        )}
      </Navigation>
      <List>
        {characters
          ? (characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          )))
          : (<h1>Not found characters</h1>)}
      </List>

      <Navigation>
        {pageNumberContext !== 1 && (
          <button type="button" onClick={handlePrevPage} className="navigation--prev">
            <ArrowIcon />
          </button>
        )}

        {pageNumberContext < maxPage && (
          <button type="button" onClick={handleNextPage} className="navigation--next">
            <ArrowIcon />
          </button>
        )}
      </Navigation>
    </Container>
  );
}

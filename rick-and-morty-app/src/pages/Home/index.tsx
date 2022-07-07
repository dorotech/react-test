import { useContext, useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import CharacterCard from '../../components/CharacterCard';
import Filter from '../../components/Filter';
import { Arrow, LoadingSpinner } from '../../components/Icons';
import { PageContext } from '../../contexts/PageContext';

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
    pageNumber, setFirstPage, handlePrevPage, handleNextPage,
  } = useContext(PageContext);

  const [characters, setCharacters] = useState<CharacterData[]>([]);
  const [loading, setLoading] = useState(true);
  // const [page, setPage] = useState(1);
  const [maxPageNumber, setMaxPageNumber] = useState(1);

  const [searchParams, setSearchParams] = useSearchParams();
  const { search } = useLocation();
  const urlSearch = search && search.substring(1);

  function handleChangeSearchParams(params: SearchData) {
    setLoading(true);
    setSearchParams(params);
    setFirstPage();
  }

  useEffect(() => {
    (async () => {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${pageNumber}&${urlSearch}`);
      const responseJson = await response.json();

      setMaxPageNumber(responseJson.info?.pages);
      setLoading(false);
      setCharacters(responseJson.results);
    })();
  }, [searchParams, pageNumber]);

  function nextPage() {
    setLoading(true);
    handleNextPage();
  }

  function prevPage() {
    setLoading(true);
    handlePrevPage();
  }

  if (loading) {
    return (
      <Container>
        <Filter handleChangeSearchParams={handleChangeSearchParams} searchParams={searchParams} />
        <List>
          <LoadingSpinner />
        </List>
      </Container>
    );
  }

  return (
    <Container>
      <Filter handleChangeSearchParams={handleChangeSearchParams} searchParams={searchParams} />
      <List>

        {
          characters
            ? (
              characters.map((character) => (
                <CharacterCard key={character.id} character={character} />
              ))
            )
            : (
              <h1>Not found characters</h1>
            )
        }
      </List>

      <Navigation>
        {
        pageNumber !== 1 && (
          <button type="button" onClick={prevPage} className="prev">
            <Arrow />
          </button>
        )
      }

        {
        pageNumber < maxPageNumber && (
          <button type="button" onClick={nextPage} className="next">
            <Arrow />
          </button>
        )
      }
      </Navigation>

    </Container>

  );
}

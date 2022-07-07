import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import CharacterCard from '../../components/CharacterCard';
import Filter from '../../components/Filter';
import { Arrow, LoadingSpinner } from '../../components/Icons';

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
  const [characters, setCharacters] = useState<CharacterData[]>([]);
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);

  const [maxPageNumber, setMaxPageNumber] = useState(1);

  const [searchParams, setSearchParams] = useSearchParams();
  const { search } = useLocation();
  const urlSearch = search && search.substring(1);

  function handleChangeSearchParams(params: SearchData) {
    setLoading(true);
    setSearchParams(params);
    setPageNumber(1);
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
    setPageNumber((prevState) => prevState + 1);
  }

  function prevPage() {
    setLoading(true);
    setPageNumber((prevState) => prevState - 1);
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

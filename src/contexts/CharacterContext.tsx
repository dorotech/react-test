import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { URLSearchParamsInit, useSearchParams } from "react-router-dom";
import { Character, CharacterSearch, Info } from "../types";

const baseURL = "https://rickandmortyapi.com/api";

interface CharacterContextData {
  characters: Character[];
  favoritesCharacters: Character[];
  getCharacterById: (id: string) => Promise<Character>;
  setToFavorites: (id: string) => void;
  searchCharacters: (
    filter: CharacterSearch,
    replaceUrl?: boolean
  ) => Promise<void>;
  searchError: string;
  clearSearchError: () => void;
  handleLoadMore: (characterList: Character[]) => Promise<void>;
}

export const CharacterContext = createContext({} as CharacterContextData);

interface CharacterProviderProps {
  children: ReactNode;
}

export function CharacterProvider({ children }: CharacterProviderProps) {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [favoritesCharacters, setFavoritesCharacters] = useState<Character[]>(
    []
  );
  const [searchError, setSearchError] = useState<string>("");
  const [page, setPage] = useState<Info["next"]>();
  const [, setSearch] = useSearchParams();

  useEffect(() => {
    async function getAllCharacters() {
      const data = await fetch(`${baseURL}/character`, {
        method: "GET",
      }).then((response) => response.json());
      setCharacters(data.results);
      setPage(data.info.next);
    }
    getAllCharacters();
  }, []);

  useEffect(() => {
    const favChars = JSON.parse(localStorage.getItem("favChars") as any);
    if (favChars === null) {
      const favoriteChars = { items: [] };
      localStorage.setItem("favChars", JSON.stringify(favoriteChars));
    }
    setFavoritesCharacters(favChars?.items);
  }, []);

  async function handleLoadMore() {
    if (page === null) {
      return;
    }

    const nextPage = await fetch(page!).then((response) => response.json());

    const newCharacterList: Character[] = nextPage.results.map(
      (character: Character) => {
        return {
          ...character,
        };
      }
    );

    setCharacters([...characters, ...newCharacterList]);
    setPage(nextPage.info.next);
  }

  async function searchCharacters(filter: CharacterSearch, replaceUrl = true) {
    const data = await fetch(
      `https://rickandmortyapi.com/api/character/?${new URLSearchParams({
        ...filter,
      })}`
    ).then((response) => response.json());

    if (data.error) {
      setSearchError(data.error);
      return;
    }

    setCharacters(data.results);

    if (replaceUrl) {
      setSearch(filter as URLSearchParamsInit, { replace: true });
    }
  }

  function clearSearchError() {
    setSearchError("");
  }

  async function getCharacterById(id: string): Promise<Character> {
    const characterAlreadyInState = characters.find(
      (character) => character.id === id
    );

    if (characterAlreadyInState) return characterAlreadyInState;

    const getCharacter = await fetch(`${baseURL}/character/${id}`).then(
      (response) => response.json()
    );

    return getCharacter;
  }

  function setToFavorites(id: string) {
    const characterFinded = characters.find((character) => character.id === id);

    const favoriteItems = JSON.parse(localStorage.getItem("favChars") as any);

    const favoriteAlreadyExists = favoritesCharacters?.some(
      (character) => character.id === characterFinded?.id
    );

    if (!favoriteAlreadyExists) {
      const setCharacterToFavorite = { ...characterFinded, favorite: true };

      const favoriteChars = favoriteItems.items;

      const setNewFavorite = {
        items: [...favoriteChars, setCharacterToFavorite],
      };

      localStorage.setItem("favChars", JSON.stringify(setNewFavorite));

      setFavoritesCharacters(setNewFavorite.items);
    } else {
      const favoriteChars = favoriteItems.items;

      const newFavoriteCharList = favoriteChars.filter(
        (favoriteChar: Character) => favoriteChar.id !== id
      );

      const newListOfFavorites = {
        items: newFavoriteCharList,
      };

      localStorage.setItem("favChars", JSON.stringify(newListOfFavorites));

      setFavoritesCharacters(newListOfFavorites.items);
    }
  }

  return (
    <CharacterContext.Provider
      value={{
        handleLoadMore,
        clearSearchError,
        searchError,
        searchCharacters,
        characters,
        getCharacterById,
        setToFavorites,
        favoritesCharacters,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
}

export const useCharacter = () => useContext(CharacterContext);

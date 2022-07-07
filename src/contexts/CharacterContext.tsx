import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Character, CharacterSearch } from "../types";

const baseURL = "https://rickandmortyapi.com/api";

interface CharacterContextData {
  characters: Character[];
  favoritesCharacters: Character[];
  getCharacterById: (id: string) => Promise<Character>;
  setToFavorites: (id: string) => void;
  searchCharacters: (filter: CharacterSearch) => Promise<void>;
  searchError: string;
  clearSearchError: () => void;
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

  useEffect(() => {
    async function getAllCharacters() {
      const data = await fetch(`${baseURL}/character`, {
        method: "GET",
      }).then((response) => response.json());
      setCharacters(data.results);
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

  async function searchCharacters(filter: CharacterSearch) {
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

    const favoriteAlreadyExists = favoritesCharacters.some(
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

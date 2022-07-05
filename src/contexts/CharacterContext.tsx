import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Character } from "../types";

const baseURL = "https://rickandmortyapi.com/api";

interface CharacterContextData {
  characters: Character[];
  favoritesCharacters: Character[];
  getCharacterById: (id: string) => Promise<Character>;
  setToFavorites: (id: string) => void;
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
    const favChars = JSON.parse(localStorage.getItem("favChars"));
    if (favChars === null) {
      const favoriteChars = { items: [] };
      localStorage.setItem("favChars", JSON.stringify(favoriteChars));
    }
    setFavoritesCharacters(favChars?.items);
  }, []);

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

    const favoriteItems = JSON.parse(localStorage.getItem("favChars"));

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
    }
  }

  return (
    <CharacterContext.Provider
      value={{
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

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
  getCharacterById: (id: string) => Promise<Character>;
}

export const CharacterContext = createContext({} as CharacterContextData);

interface CharacterProviderProps {
  children: ReactNode;
}

export function CharacterProvider({ children }: CharacterProviderProps) {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    async function getAllCharacters() {
      const data = await fetch(`${baseURL}/character`, {
        method: "GET",
      }).then((response) => response.json());
      setCharacters(data.results);
    }
    getAllCharacters();
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

  return (
    <CharacterContext.Provider value={{ characters, getCharacterById }}>
      {children}
    </CharacterContext.Provider>
  );
}

export const useCharacter = () => useContext(CharacterContext);

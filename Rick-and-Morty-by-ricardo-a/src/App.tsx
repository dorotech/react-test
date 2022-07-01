import { Popover } from "@headlessui/react";
import { useEffect, useState } from "react";
import Header from "./components/Header";

interface CharacterProps {
  id?: number;
  name: string;
  image: string;
  status: string;
}
function App(props: CharacterProps) {
  const [characters, setCharacters] = useState<CharacterProps[]>();
  const [query, setQuery] = useState<string>("");
  const [search, setSearch] = useState<string>("");

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setSearch(query);
  }

  const findCharacters = async () => {
    //busca 20 personajes
    const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${search}`);
    const data = await response.json();
    setCharacters(data.results);

  }
  useEffect(() => {
    findCharacters();
  }, [search]);

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center">
        <form className="flex">
          <div>
            <input
              type="text"
              placeholder="Search for a character"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full p-3 border-2 border-gray-600 rounded-2xl focus:outline-none text-gray-900"
            />
          </div>
          <button
            type="submit"
            className="w-20 p-3 border-2 border-gray-600 rounded-2xl bg-green-700"
            onClick={handleSubmit}
          >
            Search
          </button>
        </form>
      </div>
      <div className="flex flex-wrap relative overflow-hidden cursor-pointer mx-4 rounded-3xl">
        {
          characters && characters.map((character) => (
            // Cards
            <Popover
              className="flex flex-col items-center justify-center m-3"
              key={character.id}
            >
              <img
                className="w-full h-auto object-cover transition-opacity duration-500 ease-in-out hover:opacity-75 rounded-3xl"
                src={character.image}
                alt={character.name}
              />
              <h1
                className="text-center text-900 text-zinc-400 text-xl font-bold"
              >
                {character.name}
              </h1>
              <p
                className={`text-center text-600 text-base ${character.status === "Alive" ? "text-green-700" : "text-red-700"}`}
              >
                {character.status}
              </p>
            </Popover>
          ))
        }
      </div>
    </>
  );
}

export default App;
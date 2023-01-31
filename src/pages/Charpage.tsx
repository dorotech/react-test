import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CharDetails from "../components/CharDetails";
import Header from "../components/Header";
import Loading from "../components/Loading";
import { Character } from "../interfaces/Services";
import getCharacterDetails from "../services/get/getCharacterDetails";
import "../components/CharDetails.css";

export default function Charpage() {
  const { id } = useParams();
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchCharacter = async () => {
    setLoading(true);
    if (id) {
      const { data } = await getCharacterDetails(+id);
      setCharacter(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCharacter();
  }, [id]);

  if (loading || !character) {
    return <Loading />;
  }

  return (
    <div>
      <Header />
      <div className="character-details__container">
        <CharDetails character={character} />
      </div>
    </div>
  );
}

import { Link } from 'react-router-dom';

type CharacterData = {
  character: {
    id: number,
    name: string,
    status: string,
    image: string,
  }
};

export default function CharacterCard({ character }: CharacterData) {
  return (
    <Link to={`character/${character.id}`}>
      <img src={character.image} alt={character.name} />
      <p>
        Nome:
        {' '}
        {character.name}
      </p>
      <p>
        Status:
        {' '}
        {character.status}
      </p>
    </Link>
  );
}

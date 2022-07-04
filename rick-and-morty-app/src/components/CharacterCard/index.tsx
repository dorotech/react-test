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
    <>
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
    </>
  );
}

import { Character } from '../../interfaces/Services';
import api from '../api';

export default async function getCharacterDetails(id: number): Promise<{
  data: Character;
  status: number;
}> {
  const { data, status } = await api.get(`/character/${id}`);
  return { data, status };
}

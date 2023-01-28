import { Characters } from '../../interfaces/Services';
import api from '../api';

export default async function getCharacters(page: number): Promise<{
  data: Characters;
  status: number;
}> {
  const { data, status } = await api.get(`/character?page=${page}`);

  return { data, status };
}

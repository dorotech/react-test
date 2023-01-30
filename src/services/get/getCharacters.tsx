import { Characters } from '../../interfaces/Services';
import api from '../api';

interface Filters {
  page: string;
  name?: string;
  status?: string;
  gender?: string;
}

export default async function getCharacters(params: Filters): Promise<{
  data: Characters;
  status: number;
}> {
  let filters = '';
  Object.entries(params).forEach(([key, value]) => {
    if (value !== 'none' && value !== '' && value !== undefined) {
      if (key === 'page') {
        filters += `?${key}=${value}`;
      } else filters += `&${key}=${value}`;
    }
  });

  const { data, status } = await api.get(`/character${filters}`);
  return { data, status };
}

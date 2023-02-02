import { api } from '../../lib/axios';
import { TResponse } from './types';

export type TGetCharacter = {
  name?: string;
  gender?: string;
  status?: string;
  species?: string;
  page?: number;
};

export interface IRickMortyService {
  getCharacter(query: TGetCharacter): Promise<TResponse>;
}

class RickMortyService implements IRickMortyService {
  async getCharacter(query: TGetCharacter) {
    const { data } = await api.get<TResponse>('/character', {
      params: query,
    });

    return data;
  }
}

export const rickMortyService = new RickMortyService();

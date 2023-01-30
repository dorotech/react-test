import { api } from '../../lib/axios';

import { TResponse } from './types';

export class RickMortyService {
  async getCharacter() {
    const { data } = await api.get<TResponse>('/character');

    return data;
  }
}

export const rickMortyService = new RickMortyService();

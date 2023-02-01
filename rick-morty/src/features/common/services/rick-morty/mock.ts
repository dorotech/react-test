/* eslint-disable no-promise-executor-return */
import { IRickMortyService, TGetCharacter } from '.';
import { TResponse } from './types';

import response from './response.json';

class RickMortyMockService implements IRickMortyService {
  async getCharacter(query: TGetCharacter) {
    // Fake delay
    await new Promise((r) => setTimeout(r, 0));

    if (query.name === 'not-found') return Promise.reject(new Error('Not Found'));

    return response as any as TResponse;
  }
}

export const rickMortyMockService = new RickMortyMockService();

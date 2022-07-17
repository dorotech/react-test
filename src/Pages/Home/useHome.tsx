import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { useState } from 'react';
import { API } from '../../Services/api';
import { I_API_RESPONSE_CHARACTERS, I_PROPS_CHARACTER } from './types';

export function useHome() {
  const [characters, setCharacters] = useState<I_PROPS_CHARACTER[]>([]);

  async function getCharactersAndSetInStage() {
    const { data } = await API.get<
      AxiosRequestConfig,
      AxiosResponse<I_API_RESPONSE_CHARACTERS>
    >('character');

    setCharacters(data.results);
  }

  return {
    STATES: {
      listCharacters: characters
    },
    FUNCS: {
      getCharactersAndSetInStage
    }
  };
}

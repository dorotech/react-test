import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { useState } from 'react';
import { API } from '../../Services/api';
import {
  I_API_RESPONSE_CHARACTERS,
  I_PROPS_CHARACTER,
  I_STATE_LIMIT_PAGE
} from './types';

export function useHome() {
  const [characters, setCharacters] = useState<I_PROPS_CHARACTER[]>([]);
  const [limitItensInPage, setLimitItensInPage] =
    useState<I_STATE_LIMIT_PAGE>(5);

  async function getCharactersAndSetInStage() {
    const { data } = await API.get<
      AxiosRequestConfig,
      AxiosResponse<I_API_RESPONSE_CHARACTERS>
    >('character');

    setCharacters(data.results);
  }

  function altQuantityItemsInView(value: I_STATE_LIMIT_PAGE) {
    setLimitItensInPage(value);
  }

  return {
    STATES: {
      listCharacters: characters,
      limit: limitItensInPage
    },
    FUNCS: {
      getCharactersAndSetInStage,
      handleAlterLimitInPage: altQuantityItemsInView
    }
  };
}

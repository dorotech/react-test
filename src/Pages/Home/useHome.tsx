import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { FormEvent, useCallback, useRef, useState } from 'react';
import { API } from '../../Services/api';
import {
  I_API_REQUEST_CHARACTERS,
  I_API_RESPONSE_CHARACTERS,
  I_PROPS_CHARACTER,
  I_STATE_LIMIT_PAGE
} from './types';

let RequesIsProgress = false;

export function useHome() {
  const inputNameRef = useRef<HTMLInputElement>(null);
  const selectStatusRef = useRef<HTMLSelectElement>(null);
  const selectSpeciesRef = useRef<HTMLSelectElement>(null);
  const selectGenderRef = useRef<HTMLSelectElement>(null);

  const [characters, setCharacters] = useState<I_PROPS_CHARACTER[]>([]);
  const [characterSelected, setCharacterSelected] = useState<I_PROPS_CHARACTER>(
    {} as I_PROPS_CHARACTER
  );
  const [modalDetailsIsOpen, setModalDetailsIsOpen] = useState(false);
  const [limitItensInPage, setLimitItensInPage] =
    useState<I_STATE_LIMIT_PAGE>(20);

  const getCharactersAndSetInStage = useCallback(
    async (params: I_API_REQUEST_CHARACTERS | null) => {
      try {
        if (RequesIsProgress) return;

        RequesIsProgress = true;
        const { data } = await API.get<
          AxiosRequestConfig,
          AxiosResponse<I_API_RESPONSE_CHARACTERS>
        >('character', {
          params
        });

        setCharacters(data.results);
        RequesIsProgress = false;
      } catch (err) {
        RequesIsProgress = false;
      }
    },
    []
  );

  function altQuantityItemsInView(value: I_STATE_LIMIT_PAGE) {
    setLimitItensInPage(value);
  }

  function alterIsViewModalDetails(character?: I_PROPS_CHARACTER) {
    if (character) {
      setCharacterSelected(character);
    }

    setModalDetailsIsOpen((oldstate) => !oldstate);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const params = {
      status: '',
      species: '',
      gender: '',
      name: ''
    };

    if (inputNameRef.current?.value) {
      params.name = inputNameRef.current?.value;
    }
    if (selectStatusRef.current?.value) {
      params.status = selectStatusRef.current?.value;
    }

    if (selectSpeciesRef.current?.value) {
      params.species = selectSpeciesRef.current?.value;
    }

    if (selectGenderRef.current?.value) {
      params.gender = selectGenderRef.current?.value;
    }

    // alert(JSON.stringify(params));
    getCharactersAndSetInStage(params);
  }

  return {
    REFS: {
      inputNameRef,
      selectSpeciesRef,
      selectStatusRef,
      selectGenderRef
    },
    STATES: {
      listCharacters: characters,
      limit: limitItensInPage,
      modalDetailsIsOpen,
      characterSelected
    },
    FUNCS: {
      getCharactersAndSetInStage,
      handleAlterLimitInPage: altQuantityItemsInView,
      hanldeAlterModalDetails: alterIsViewModalDetails,
      handleSubmit
    }
  };
}

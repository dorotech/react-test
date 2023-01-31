import { TGetCharacter } from '@/features/common/services/rick-morty';
import { getSearchParamsToObject } from '@/features/common/utils/get-search-params-to-object';
import Router from 'next/router';
import { useEffect, useReducer } from 'react';

const queryReducer = (state: TGetCharacter, payload: TGetCharacter) => {
  const shouldReset = Object.keys(payload).length === 0;
  if (shouldReset) return {};

  const newState = {
    ...state,
    ...payload,
  };

  // URL params
  Router.replace(Router.asPath, { query: newState });

  return newState;
};

export const useQueryState = () => {
  const [query, setQuery] = useReducer(queryReducer, {});

  useEffect(() => {
    const savedParams = getSearchParamsToObject(window.location.search);

    if (savedParams) {
      setQuery(savedParams);
    }
  }, []);

  return {
    query,
    setQuery,
    resetQuery: () => setQuery({}),
  };
};

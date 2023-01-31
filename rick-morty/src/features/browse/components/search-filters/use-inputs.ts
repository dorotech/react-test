import { useReducer } from 'react';

export const INITIAL_STATE = {
  status: undefined as string | undefined,
  gender: undefined as string | undefined,
};

const inputsReducer = (
  state: typeof INITIAL_STATE,
  payload: { key: keyof typeof INITIAL_STATE; value: string }
) => {
  const newState = {
    ...state,
    [payload.key]: state[payload.key] === payload.value ? undefined : payload.value,
  };

  return newState;
};

export const useInputs = () => {
  const [inputs, dispatch] = useReducer(inputsReducer, INITIAL_STATE);

  return { inputs, dispatch };
};

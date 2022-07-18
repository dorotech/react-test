export type I_PROPS_CHARACTER = {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
  gender: string;
  type: string;
  created: string;
};

export type I_API_RESPONSE_CHARACTERS = {
  results: I_PROPS_CHARACTER[];
};

export type I_API_REQUEST_CHARACTERS = {
  status: string;
  species: string;
  gender: string;
  name: string;
};

export type I_STATE_LIMIT_PAGE = 20 | 10 | 5;

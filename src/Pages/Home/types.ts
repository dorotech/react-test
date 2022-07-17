export type I_PROPS_CHARACTER = {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
  gender: string;
};

export type I_API_RESPONSE_CHARACTERS = {
  results: I_PROPS_CHARACTER[];
};

import axios from "axios";

export const rmService = {
  baseUrl: "https://rickandmortyapi.com/api/character",
  getCharacters: (
    page: number = 1,
    name?: string,
    status?: string,
    species?: string,
    // type?: string,
    gender?: string
  ) => {
    return axios.get(`${rmService.baseUrl}`, {
      headers: {},
      params: {
        page: page,
        name: name,
        status: status,
        species: species,
        // type: type,
        gender: gender,
      },
    });
  },
};

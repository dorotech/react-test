import axios from "axios";

export const rmService = {
  baseUrl: "https://rickandmortyapi.com/api/character",
  getCharacters: (page: number = 1) => {
    return axios.get(`${rmService.baseUrl}`, {
      headers: {},
      params: { page: page },
    });
  },
};

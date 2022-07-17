import axios from 'axios';

export const rmService = {
  baseUrl: 'https://rickandmortyapi.com/api/character',
  getCharacters: (
    page: number = 1,
    name?: string,
    status?: string,
    species?: string,
    // type?: string,
    gender?: string,
  ) => (
    axios.get(`${rmService.baseUrl}`, {
      headers: {},
      params: {
        page,
        name,
        status,
        species,
        // type,
        gender,
      },
    })
  )
};

import { Axios } from 'axios'
import {
  FilterCharactersByNameRepository,
  FilterCharactersBySpeciesRepository,
  FilterCharactersByStatusRepository,
  GetCharacterByIdRepository,
  GetCharactersRepository,
} from '../../data/protocols'

export class CharactersRepository
  implements
    GetCharactersRepository,
    GetCharacterByIdRepository,
    FilterCharactersByNameRepository,
    FilterCharactersBySpeciesRepository,
    FilterCharactersByStatusRepository
{
  constructor(private readonly api: Axios) {}
  async getCharacters(
    params: GetCharactersRepository.Params,
  ): Promise<GetCharactersRepository.Result> {
    const response = await this.api.get(`/character?page=${params.page}`)
    return response.data
  }

  async getById(
    params: GetCharacterByIdRepository.Params,
  ): Promise<GetCharacterByIdRepository.Result> {
    const response = await this.api.get(`/character/${params.id}`)
    return response.data
  }

  async filterByName(
    params: FilterCharactersByNameRepository.Params,
  ): Promise<FilterCharactersByNameRepository.Result> {
    try {
      const response = await this.api.get(`/character?page=${params.page}&name=${params.name}`)
      return response.data
    } catch (error) {
      return null
    }
  }

  async filterBySpecies(
    params: FilterCharactersBySpeciesRepository.Params,
  ): Promise<FilterCharactersBySpeciesRepository.Result> {
    try {
      const response = await this.api.get(
        `/character?page=${params.page}&species=${params.species}`,
      )
      return response.data
    } catch (error) {
      return null
    }
  }

  async filterByStatus(
    params: FilterCharactersByStatusRepository.Params,
  ): Promise<FilterCharactersByStatusRepository.Result> {
    try {
      const response = await this.api.get(`/character?page=${params.page}&status=${params.status}`)
      return response.data
    } catch (error) {
      return null
    }
  }
}

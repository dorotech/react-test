import { FilterCharactersBySpecies } from '../../domain/usecases'
import { FilterCharactersBySpeciesRepository } from '../protocols'

export class RemoteFilterCharactersBySpecies implements FilterCharactersBySpecies {
  constructor(
    private readonly filterCharactersBySpeciesRepository: FilterCharactersBySpeciesRepository,
  ) {}
  async perform(
    params: FilterCharactersBySpecies.Params,
  ): Promise<FilterCharactersBySpecies.Result> {
    const characters = await this.filterCharactersBySpeciesRepository.filterBySpecies(params)
    return characters
  }
}

import { FilterCharactersByName } from '../../domain/usecases'
import { FilterCharactersByNameRepository } from '../protocols'

export class RemoteFilterCharactersByName implements FilterCharactersByName {
  constructor(
    private readonly filterCharactersByNameRepository: FilterCharactersByNameRepository,
  ) {}
  async perform(params: FilterCharactersByName.Params): Promise<FilterCharactersByName.Result> {
    const characters = await this.filterCharactersByNameRepository.filterByName(params)
    return characters
  }
}

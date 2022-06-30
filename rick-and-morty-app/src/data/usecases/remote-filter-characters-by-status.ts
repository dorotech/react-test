import { FilterCharactersByStatus } from '../../domain/usecases'
import { FilterCharactersByStatusRepository } from '../protocols'

export class RemoteFilterCharactersByStatus implements FilterCharactersByStatus {
  constructor(
    private readonly filterCharactersByStatusRepository: FilterCharactersByStatusRepository,
  ) {}
  async perform(params: FilterCharactersByStatus.Params): Promise<FilterCharactersByStatus.Result> {
    const characters = await this.filterCharactersByStatusRepository.filterByStatus(params)
    return characters
  }
}

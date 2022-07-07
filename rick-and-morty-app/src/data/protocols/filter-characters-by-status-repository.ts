import { FilterCharactersByStatus } from '../../domain/usecases'

export interface FilterCharactersByStatusRepository {
  filterByStatus: (
    params: FilterCharactersByStatusRepository.Params,
  ) => Promise<FilterCharactersByStatusRepository.Result>
}

export namespace FilterCharactersByStatusRepository {
  export type Params = FilterCharactersByStatus.Params
  export type Result = FilterCharactersByStatus.Result
}

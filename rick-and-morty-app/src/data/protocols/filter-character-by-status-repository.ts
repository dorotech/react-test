import { FilterCharacterByStatus } from '../../domain/usecases'

export interface FilterCharacterByStatusRepository {
  filterByStatus: (
    params: FilterCharacterByStatusRepository.Params,
  ) => Promise<FilterCharacterByStatusRepository.Result>
}

export namespace FilterCharacterByStatusRepository {
  export type Params = FilterCharacterByStatus.Params
  export type Result = FilterCharacterByStatus.Result
}

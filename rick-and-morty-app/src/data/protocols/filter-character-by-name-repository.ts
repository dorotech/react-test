import { FilterCharacterByName } from '../../domain/usecases'

export interface FilterCharacterByNameRepository {
  filterByName: (
    params: FilterCharacterByNameRepository.Params,
  ) => Promise<FilterCharacterByNameRepository.Result>
}

export namespace FilterCharacterByNameRepository {
  export type Params = FilterCharacterByName.Params
  export type Result = FilterCharacterByName.Result
}

import { FilterCharactersByName } from '../../domain/usecases'

export interface FilterCharactersByNameRepository {
  filterByName: (
    params: FilterCharactersByNameRepository.Params,
  ) => Promise<FilterCharactersByNameRepository.Result>
}

export namespace FilterCharactersByNameRepository {
  export type Params = FilterCharactersByName.Params
  export type Result = FilterCharactersByName.Result
}

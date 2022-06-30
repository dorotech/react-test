import { FilterCharacterBySpecies } from '../../domain/usecases'

export interface FilterCharacterBySpeciesRepository {
  filterBySpecies: (
    params: FilterCharacterBySpeciesRepository.Params,
  ) => Promise<FilterCharacterBySpeciesRepository.Result>
}

export namespace FilterCharacterBySpeciesRepository {
  export type Params = FilterCharacterBySpecies.Params
  export type Result = FilterCharacterBySpecies.Result
}

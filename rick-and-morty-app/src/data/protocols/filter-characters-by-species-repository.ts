import { FilterCharactersBySpecies } from '../../domain/usecases'

export interface FilterCharactersBySpeciesRepository {
  filterBySpecies: (
    params: FilterCharactersBySpeciesRepository.Params,
  ) => Promise<FilterCharactersBySpeciesRepository.Result>
}

export namespace FilterCharactersBySpeciesRepository {
  export type Params = FilterCharactersBySpecies.Params
  export type Result = FilterCharactersBySpecies.Result
}

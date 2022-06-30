import { CharacterResponseModel } from '../models'

export interface FilterCharactersBySpecies {
  perform(params: FilterCharactersBySpecies.Params): Promise<FilterCharactersBySpecies.Result>
}

export namespace FilterCharactersBySpecies {
  export type Params = {
    species: string
    page: number
  }
  export type Result = CharacterResponseModel | null
}

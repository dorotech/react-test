import { CharacterResponseModel } from '../models'

export interface FilterCharacterBySpecies {
  perform(params: FilterCharacterBySpecies.Params): Promise<FilterCharacterBySpecies.Result>
}

export namespace FilterCharacterBySpecies {
  export type Params = {
    species: string
  }
  export type Result = CharacterResponseModel
}

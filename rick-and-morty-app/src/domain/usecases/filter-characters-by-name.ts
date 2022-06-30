import { CharacterResponseModel } from '../models'

export interface FilterCharactersByName {
  perform(params: FilterCharactersByName.Params): Promise<FilterCharactersByName.Result>
}

export namespace FilterCharactersByName {
  export type Params = {
    name: string
  }
  export type Result = CharacterResponseModel
}

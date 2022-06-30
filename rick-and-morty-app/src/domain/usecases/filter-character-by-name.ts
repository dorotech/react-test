import { CharacterResponseModel } from '../models'

export interface FilterCharacterByName {
  perform(params: FilterCharacterByName.Params): Promise<FilterCharacterByName.Result>
}

export namespace FilterCharacterByName {
  export type Params = {
    name: string
  }
  export type Result = CharacterResponseModel
}

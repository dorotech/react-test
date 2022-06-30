import { CharacterResponseModel } from '../models'

export interface FilterCharactersByStatus {
  perform(params: FilterCharactersByStatus.Params): Promise<FilterCharactersByStatus.Result>
}

export namespace FilterCharactersByStatus {
  export type Params = {
    status: string
  }
  export type Result = CharacterResponseModel
}

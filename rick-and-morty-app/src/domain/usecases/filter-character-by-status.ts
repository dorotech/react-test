import { CharacterResponseModel } from '../models'

export interface FilterCharacterByStatus {
  perform(params: FilterCharacterByStatus.Params): Promise<FilterCharacterByStatus.Result>
}

export namespace FilterCharacterByStatus {
  export type Params = {
    status: string
  }
  export type Result = CharacterResponseModel
}

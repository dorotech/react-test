import { CharacterResponseModel } from '../models'

export interface FilterCharactersByStatus {
  perform(params: FilterCharactersByStatus.Params): Promise<FilterCharactersByStatus.Result>
}

export namespace FilterCharactersByStatus {
  export type Params = {
    status: string
    page: number
  }
  export type Result = CharacterResponseModel | null
}

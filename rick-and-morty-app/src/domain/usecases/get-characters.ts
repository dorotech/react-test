import { CharacterResponseModel } from '../models'

export interface GetCharacters {
  perform(params: GetCharacters.Params): Promise<GetCharacters.Result>
}

export namespace GetCharacters {
  export type Params = {
    page: number
  }
  export type Result = CharacterResponseModel
}

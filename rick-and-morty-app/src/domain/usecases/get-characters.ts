import { CharacterResponseModel } from '../models'

export interface GetCharacters {
  perform(): Promise<GetCharacters.Result>
}

export namespace GetCharacters {
  export type Result = CharacterResponseModel
}

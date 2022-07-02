import { CharacterModel } from '../models'

export interface GetCharacterById {
  perform(params: GetCharacterById.Params): Promise<GetCharacterById.Result>
}

export namespace GetCharacterById {
  export type Params = {
    id: number
  }
  export type Result = CharacterModel
}

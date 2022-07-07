import { GetCharacterById } from '../../domain/usecases'

export interface GetCharacterByIdRepository {
  getById: (params: GetCharacterById.Params) => Promise<GetCharacterById.Result>
}

export namespace GetCharacterByIdRepository {
  export type Params = GetCharacterById.Params
  export type Result = GetCharacterById.Result
}

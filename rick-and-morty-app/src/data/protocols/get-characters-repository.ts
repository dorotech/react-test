import { GetCharacters } from '../../domain/usecases'

export interface GetCharactersRepository {
  getCharacters(params: GetCharactersRepository.Params): Promise<GetCharactersRepository.Result>
}

export namespace GetCharactersRepository {
  export type Params = GetCharacters.Params
  export type Result = GetCharacters.Result
}

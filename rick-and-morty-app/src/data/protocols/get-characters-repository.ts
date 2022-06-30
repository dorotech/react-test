import { GetCharacters } from '../../domain/usecases'

export interface GetCharactersRepository {
  getCharacters(): Promise<GetCharactersRepository.Result>
}

export namespace GetCharactersRepository {
  export type Result = GetCharacters
}

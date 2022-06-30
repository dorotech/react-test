import { RemoteGetCharacters } from '../../../data/usecases'
import { GetCharacters } from '../../../domain/usecases'
import { CharactersRepository } from '../../../infra/db/repository'
import { api } from '../../../infra/http'

export const makeRemoteGetCharacters = (): GetCharacters => {
  return new RemoteGetCharacters(new CharactersRepository(api))
}

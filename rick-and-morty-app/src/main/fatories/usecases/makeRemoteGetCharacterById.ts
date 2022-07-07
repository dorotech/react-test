import { RemoteGetCharactersById } from '../../../data/usecases'
import { GetCharacterById } from '../../../domain/usecases'
import { CharactersRepository } from '../../../infra/db/repository'
import { api } from '../../../infra/http'

export const makeRemoteGetCharacterById = (): GetCharacterById => {
  return new RemoteGetCharactersById(new CharactersRepository(api))
}

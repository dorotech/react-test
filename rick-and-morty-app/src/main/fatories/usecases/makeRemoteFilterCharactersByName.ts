import { RemoteFilterCharactersByName } from '../../../data/usecases'
import { FilterCharactersByName } from '../../../domain/usecases'
import { CharactersRepository } from '../../../infra/db/repository'
import { api } from '../../../infra/http'

export const makeRemoteFilterCharactersByName = (): FilterCharactersByName => {
  return new RemoteFilterCharactersByName(new CharactersRepository(api))
}

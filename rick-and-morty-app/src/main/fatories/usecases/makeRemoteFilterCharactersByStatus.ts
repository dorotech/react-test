import { RemoteFilterCharactersByStatus } from '../../../data/usecases'
import { FilterCharactersByStatus } from '../../../domain/usecases'
import { CharactersRepository } from '../../../infra/db/repository'
import { api } from '../../../infra/http'

export const makeRemoteFilterCharactersByStatus = (): FilterCharactersByStatus => {
  return new RemoteFilterCharactersByStatus(new CharactersRepository(api))
}

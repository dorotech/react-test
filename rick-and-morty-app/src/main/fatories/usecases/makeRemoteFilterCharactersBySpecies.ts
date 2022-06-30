import { RemoteFilterCharactersBySpecies } from '../../../data/usecases'
import { FilterCharactersBySpecies } from '../../../domain/usecases'
import { CharactersRepository } from '../../../infra/db/repository'
import { api } from '../../../infra/http'

export const makeRemoteFilterCharactersBySpecies = (): FilterCharactersBySpecies => {
  return new RemoteFilterCharactersBySpecies(new CharactersRepository(api))
}

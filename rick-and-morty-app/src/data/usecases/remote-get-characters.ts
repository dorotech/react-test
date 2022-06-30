import { GetCharacters } from '../../domain/usecases'
import { GetCharactersRepository } from '../protocols'

export class RemoteGetCharacters implements GetCharacters {
  constructor(private readonly getCharactersRepository: GetCharactersRepository) {}

  async perform(): Promise<GetCharacters.Result> {
    const characters = await this.getCharactersRepository.getCharacters()
    return characters
  }
}

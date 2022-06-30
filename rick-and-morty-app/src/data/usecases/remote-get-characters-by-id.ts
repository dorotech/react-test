import { GetCharacterById } from '../../domain/usecases'
import { GetCharacterByIdRepository } from '../protocols'

export class RemoteGetCharactersById implements GetCharacterById {
  constructor(private readonly getCharacterByIdRepository: GetCharacterByIdRepository) {}

  async perform(params: GetCharacterById.Params): Promise<GetCharacterById.Result> {
    const characters = await this.getCharacterByIdRepository.getById(params)
    return characters
  }
}

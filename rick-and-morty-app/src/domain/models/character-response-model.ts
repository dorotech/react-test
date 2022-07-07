import { CharacterModel } from './character-model'

export interface CharacterResponseModel {
  info: {
    count: string
    pages: number
    next: string
    prev: string | null
  }
  results: CharacterModel[]
}

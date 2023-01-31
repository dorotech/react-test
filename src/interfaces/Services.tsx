export interface Characters {
  info: Info;
  results: Character[];
}

export interface Info {
  pages: number;
}

export interface Character {
  id: number;
  name: string;
  status: Status;
  species: Species;
  type: string;
  gender: Gender;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: Date;
}

export enum Gender {
  'Female',
  'Male',
  'unknown',
}

export interface Location {
  name: string;
  url: string;
}

export enum Species {
  'Alien',
  'Human',
}

export enum Status {
  Alive = 'Alive',
  Dead = 'Dead',
  unknown = 'unknown',
}

export interface Info {
  count?: number;
  pages?: number;
  next: string | null;
  prev: string | null;
}

export interface Origin {
  name?: string;
  url?: string;
}

export interface Location {
  id?: string;
  name?: string;
  type?: string;
  dimension?: string;
  residents: string[];
  url?: string;
  created?: string;
}

export interface Episode {
  id: string;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export interface Character {
  id: string;
  name: string;
  status?: "Alive" | "Dead" | "unknown";
  // eslint-disable-next-line prettier/prettier
  species?: "Animal" | "Humanoid" | "Robot" | "Disease" | "unknown" | "Human" | "Poopybutthole" | "Alien" | "Cronenberg" | "Mythological Creature";
  type?: string;
  gender?: "Female" | "Male" | "Genderless" | "unknown";
  origin?: Origin;
  location?: Location;
  image: string;
  episode?: Episode["url"][];
  url?: string;
  created?: string;
  // atributo que só existe no front para criação
  // de lista de favoritos.
  favorite: boolean;
}

export interface CharacterSearch {
  name?: Character["name"] | "";
  species?: Character["species"] | "";
  status?: Character["status"] | "";
}

export interface LocalStorageInfo {
  characters?: Character[];
}

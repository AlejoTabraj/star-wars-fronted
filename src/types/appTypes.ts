export interface IFilm {
    _id: string;
    title: string;
    episodeId: number;
    openingCrawl: string;
    director: string;
    producer: string;
    releaseDate: Date;
    characters: IPerson[];
    planets: IPlanet[];
    starships: IStarship[];
    vehicles: string[];
    species: string[];
    created: Date;
    edited: Date;
    url: string;
  }

  export interface IPerson {
    _id: string;
    name: string;
    height: string;
    mass: string;
    hairColor: string;
    skinColor: string;
    eyeColor: string;
    birthYear: string;
    gender: string;
    homeworld: string;
    films: IFilm[];
    species: string[];
    vehicles: string[];
    starships: IStarship[];
    created: Date;
    edited: Date;
    url: string;
  }

  export interface IPlanet {
    _id: string;
    name: string;
    rotationPeriod: string;
    orbitalPeriod: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surfaceWater: string;
    population: string;
    residents: IPerson[];
    films: IFilm[];
    created: Date;
    edited: Date;
    url: string;
  }

  export interface IStarship {
    _id: string;
    name: string;
    model: string;
    manufacturer: string;
    costInCredits: string;
    length: string;
    maxAtmospheringSpeed: string;
    crew: string;
    passengers: string;
    cargoCapacity: string;
    consumables: string;
    hyperdriveRating: string;
    MGLT: string;
    starshipClass: string;
    pilots: IPerson[];
    films: IFilm[];
    created: Date;
    edited: Date;
    url: string;
  }
  
  export interface IQueryResponse <T> {
    documents: T[];
    totalPages: number;
  }

  export interface SearchBarProps {
    setKeyWord: React.Dispatch<React.SetStateAction<string>>;
  }
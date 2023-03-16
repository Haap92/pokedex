export type Pokemon = {
  id: string;
  name: string;
  url: string;
  sprite: string;
  image: string;
  firstType: string;
  seccondType?: string;
  color: string;
};

export type PokemonDetail = {
  id: number;
  experience: number;
  height: number;
  weight: number;
  hp: number;
  attack: number;
  defense: number;
  spAttack: number;
  spDefense: number;
  speed: number;
  firstAbility: string;
  seccondAbility?: string;
  hiddenAbility?: String;
};

export type PokemonSpecie = {
  id: string;
  pokedexEntries: {
    flavor_text: string;
    language: { name: string };
    version: { name: string };
  }[];
  evolutionChain: {
    url: string;
  };
  evolutionChainId: string;
};

export default interface evolutionChain {
  id: number;
  name: string;
  image: string;
}

export const region: Record<string, string> = {
  Kanto: '1',
  Johto: '2',
  Hoenn: '3',
  Shino: '4',
  Unova: '5',
  Kalos: '6',
  Alola: '7',
  Galar: '8',
  Paldea: '9',
};

export const generation = [
  { name: 'All Pokemons', value: '0' },
  { name: 'Generation 1', value: '1' },
  { name: 'Generation 2', value: '2' },
  { name: 'Generation 3', value: '3' },
  { name: 'Generation 4', value: '4' },
  { name: 'Generation 5', value: '5' },
  { name: 'Generation 6', value: '6' },
  { name: 'Generation 7', value: '7' },
  { name: 'Generation 8', value: '8' },
  { name: 'Generation 9', value: '9' },
];

export const pokemonTypeColors: Record<string, string> = {
  water: '#4A90DA',
  dark: '#58575F',
  steel: '#417D9A',
  rock: '#BAAB82',
  psychic: '#EA5D60',
  poison: '#A552CC',
  normal: '#9DA0AA',
  ice: '#61CEC0',
  ground: '#DD7748',
  grass: '#62B957',
  ghost: '#556AAE',
  flying: '#748FC9',
  fire: '#FD7D24',
  fighting: '#D04164',
  fairy: '#ED6EC7',
  electric: '#EED535',
  dragon: '#0F6AC0',
  bug: '#A6B91A',
};

export const pokemonBackgroundColors: Record<string, string> = {
  water: '#58ABF6',
  dark: '#6F6E78',
  steel: '#4C91B2',
  rock: '#D4C294',
  psychic: '#FF6568',
  poison: '#9F6E97',
  normal: '#B5B9C4',
  ice: '#91D8DF',
  ground: '#F78551',
  grass: '#8BBE8A',
  ghost: '#8571BE',
  flying: '#83A2E3',
  fire: '#FFA756',
  fighting: '#EB4971',
  fairy: '#EBA8C3',
  electric: '#F2CB55',
  dragon: '#7383B9',
  bug: '#8BD674',
};

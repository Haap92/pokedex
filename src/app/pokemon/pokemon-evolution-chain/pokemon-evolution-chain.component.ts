import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon, PokemonSpecie, pokemonTypeColors } from '../types';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-evolution-chain',
  templateUrl: './pokemon-evolution-chain.component.html',
  styleUrls: ['./pokemon-evolution-chain.component.scss']
})
export class PokemonEvolutionChainComponent {
  @Input() pokemon!: Pokemon
  @Input() pokemonSpecie!: PokemonSpecie

  evolutionChain: any[] = [];

  constructor(private router: Router, private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemonEvolutionChain(this.pokemonSpecie.evolutionChain.url);   
    console.log(this.pokemonSpecie);
    
  }

  getPokemonEvolutionChain(evolutionChainUrl: string): void {
    const evolutionChainId = evolutionChainUrl.split('/')[6];
    this.pokemonService.getPokemonByEvolutionChain(evolutionChainId).subscribe((evolutionChain: any) => {
      let currentEvolution = evolutionChain.chain;
      const evolutionChainArray = [];
      while (currentEvolution) {
        const id = currentEvolution.species.url.split('/')[6];
        const name = currentEvolution.species.name;
        const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
        evolutionChainArray.push({ id, name, image });
        currentEvolution = currentEvolution.evolves_to[0];
      }
      this.evolutionChain = evolutionChainArray;
    });
  }
  
  getColorForType(type: string): string {
    const colorForType = pokemonTypeColors[type];
    return colorForType;
  }

  async goToPokemon(id: string) {
    await this.router.navigate([`/pokedex/${id}`]);
    window.location.reload();
  }
}

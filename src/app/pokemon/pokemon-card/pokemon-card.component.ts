import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon, pokemonBackgroundColors, pokemonTypeColors, } from '../types';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent {
  @Input() 
  pokemon!: Pokemon;
  constructor(private router: Router) {}

  getColorForBackground(type: string): string {
    const colorForBackground = pokemonBackgroundColors[type];
    return colorForBackground;
  }

  getColorForType(type: string): string {
    const colorForBackground = pokemonTypeColors[type];
    return colorForBackground;
  }

  goToPokemonDetails() {
    this.router.navigate([`/pokedex/${this.pokemon.id}`]);
  }
}
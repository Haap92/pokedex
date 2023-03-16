import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { map, Observable } from 'rxjs';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../types';

@Injectable({ providedIn: 'root' })
export class PokemonListResolver implements Resolve<Pokemon[]> {
  constructor(private pokemonService: PokemonService) {}

  resolve(): Observable<Pokemon[]> {
    return this.pokemonService.getPokemonData(1008).pipe(
      map((response: any) => response.results)
    );
  }
}
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PokemonService } from '../pokemon.service';
import { Pokemon, PokemonDetail, PokemonSpecie } from '../types';

@Injectable({ providedIn: 'root' })
export class PokemonDetailResolver
  implements Resolve<{ pokemon: Pokemon; pokemonSpecie: PokemonSpecie }>
{
  constructor(private pokemonService: PokemonService) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<{ pokemon: Pokemon; pokemonSpecie: PokemonSpecie }> {
    const id = route.paramMap.get('id')!;
    console.log(id);
    
    return forkJoin({
      pokemon: this.pokemonService.getPokemon(id),
      pokemonSpecies: this.pokemonService.getPokemonSpecie(id),
    }).pipe(map((response: any) => response.results));
  }
}

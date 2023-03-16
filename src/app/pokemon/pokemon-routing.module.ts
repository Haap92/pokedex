import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../core/not-found/not-found.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonDetailResolver } from './pokemon-detail/pokemon-detail.resolver';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonListResolver } from './pokemon-list/pokemon-list.resolver';

const routes: Routes = [
 
  { path: 'pokedex', component: PokemonListComponent, resolve: { pokemons: PokemonListResolver } },
  { path: 'pokedex/:id', component: PokemonDetailComponent, resolve: { pokemonData: PokemonDetailResolver } },
  { path: '', redirectTo: '/pokedex', pathMatch: 'full' },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class PokemonRoutingModule {};
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonService } from './pokemon.service';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonEvolutionChainComponent } from './pokemon-evolution-chain/pokemon-evolution-chain.component';
import { CoreModule } from '../core/core.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonCardComponent,
    PokemonDetailComponent,
    PokemonEvolutionChainComponent,
  ],
  imports: [PokemonRoutingModule, CoreModule, CommonModule, HttpClientModule, FormsModule],
  providers: [PokemonService],
})
export class PokemonModule {}

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PokemonNotFoundComponent } from './pokemon-not-found/pokemon-not-found.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SelectComponent } from './select/select.component';

@NgModule({
  declarations: [
    SearchBarComponent,
    SelectComponent,
    HeaderComponent,
    PokemonNotFoundComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  exports: [
    SearchBarComponent,
    SelectComponent,
    HeaderComponent,
    PokemonNotFoundComponent,
    NotFoundComponent,
  ],
  providers: [],
})
export class CoreModule {}

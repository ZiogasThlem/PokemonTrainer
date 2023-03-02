import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonCatalogueService } from 'src/app/services/pokemon-catalogue.service';

@Component({
  selector: 'app-pokemon-catalogue',
  template: `<main class="container-fluid">
               <app-pokemon-list [pokemonList]="pokemonList">
               </app-pokemon-list>
             </main>`,
  styles: [`main {
              display: flex;
              justify-content: space-between;
            }`]
})
export class PokemonCataloguePage implements OnInit{

  get pokemonList(): Pokemon[]{
    return this.pokemonCatalogueService.pokemonList
  }
  get error(): string {
    return this.pokemonCatalogueService.error
  }
  
  constructor (
    private readonly pokemonCatalogueService: PokemonCatalogueService
    ) { }

    ngOnInit(): void {
      // load pokemon list each time user navigates
      // to this page
      this.pokemonCatalogueService.findAllPokemon()
    }

}

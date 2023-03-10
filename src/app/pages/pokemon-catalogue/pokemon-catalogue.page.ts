import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonCatalogueService } from 'src/app/services/pokemon-catalogue.service';

@Component({
  selector: 'app-pokemon-catalogue',
  templateUrl: 'pokemon-catalogue.page.html',
  styleUrls: ['pokemon-catalogue.page.css']
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

import { Component, OnInit } from '@angular/core';
import { TrainerService } from './services/trainer.service';
import { PokemonCatalogueService } from './services/pokemon-catalogue.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(
    private readonly trainerService: TrainerService,
    private readonly pokemonCatalogueService: PokemonCatalogueService
  ) { }
  ngOnInit(): void {
    if (this.trainerService.trainer) this.pokemonCatalogueService.findAllPokemon()
  }
}

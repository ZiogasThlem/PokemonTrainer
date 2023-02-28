import { Injectable } from '@angular/core';
import { TrainerService } from './trainer.service';
import { PokemonCatalogueService } from './pokemon-catalogue.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { enviroment } from 'src/enviroments/enviroment';
import { Trainer } from '../models/trainer.model';
import { Pokemon } from '../models/pokemon.model';

const { trainerApiKey, trainerApiUrl} = enviroment

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  constructor(
    private http: HttpClient,
    private readonly trainerService: TrainerService,
    private readonly pokemonCatalogueService: PokemonCatalogueService
  ) { }


  collect(pokemonName: string): void{
    if (!this.trainerService.trainer)
    throw new Error('There is no trainer');

    const trainer: Trainer = this.trainerService.trainer;
    const pokemon: Pokemon | undefined = this.pokemonCatalogueService.pokemonByName(pokemonName);

    if (!pokemon)
      throw new Error('No pokemon named: ' + pokemonName + ' exists.');

}
}

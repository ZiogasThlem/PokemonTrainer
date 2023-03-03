import { Injectable } from '@angular/core';
import { TrainerService } from './trainer.service';
import { PokemonCatalogueService } from './pokemon-catalogue.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { enviroment } from 'src/environments/environment';
import { Trainer } from '../models/trainer.model';
import { Pokemon } from '../models/pokemon.model';
import { Observable, tap } from 'rxjs';

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

  // fucntion used when collect-button in clicked
  collect(pokemonName: string): Observable<Trainer>{

    // if trainer doesn't exist, error is thrown
    if (!this.trainerService.trainer) throw new Error('There is no trainer');

    const trainer: Trainer = this.trainerService.trainer;
    const pokemon: Pokemon | undefined = this.pokemonCatalogueService.pokemonByName(pokemonName);

    // if pokemon doesn't exist, error is thrown
    if (!pokemon) throw new Error('No pokemon named: ' + pokemonName + ' exists.');

    // checking if selected pokemon exists in collection
    // and is added if it doesn't
    if (!this.trainerService.isInCollection(pokemonName)) 
      this.trainerService.addToCollection(pokemon)
    
    // else it is removed from collection instead
    else 
      this.trainerService.removeFromCollection(pokemonName)  
    

    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'x-api-key': trainerApiKey
    })

    // making patch request to the trainer API to "modify" the pokemon field
    // accordingly
    return this.http.patch<Trainer>(`${trainerApiUrl}/${trainer.id}`,{
      pokemon: [...trainer.pokemon]}, { headers }
    ).pipe(
      tap((updatedTrainer: Trainer)=>{
        this.trainerService.trainer = updatedTrainer
      }
      )
    )
}
}

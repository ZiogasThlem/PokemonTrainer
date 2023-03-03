import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from 'src/environments/environment';
import { Pokemon } from '../models/pokemon.model';
import { RootObject } from '../models/pokemon.model';
import { finalize } from 'rxjs';


const { pokeApiUrl } = enviroment
@Injectable({
  providedIn: 'root'
})
export class PokemonCatalogueService {

  constructor(private readonly http: HttpClient) { }

  private _pokemonList: Pokemon[] = [];
  private _error: string = "";

  get pokemonList(): Pokemon[] {
    return this._pokemonList
  }

  get error(): string {
    return this._error
  }


  // "fetching" all pokemon from the PokeAPI,
  // and stores them to an Pokemon type array
  public findAllPokemon(): void{

    // since pokemonList's length is greater than zero,
    // it means that the request to the API has already been
    // done, so function ends here
    if (this._pokemonList.length > 0) return
    
    this.http.get<RootObject>(pokeApiUrl)
      .subscribe({
        next: (root: RootObject) => {
          this._pokemonList = root.results
        },
        error: (error: HttpErrorResponse) => {
          this._error = error.message
        }
      })
  }

  // getting a pokemon by it's "name" field.
  // Used for validation
  pokemonByName(name: string): Pokemon | undefined {
    return this._pokemonList.find((pokemon: Pokemon) => pokemon.name === name)
  }
}

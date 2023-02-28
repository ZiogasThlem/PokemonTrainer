import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from 'src/enviroments/enviroment.prod';
import { Pokemon } from '../models/pokemon.model';
import { RootObject } from '../models/pokemon-gathered.model';
import { finalize, map } from 'rxjs';


const { pokeApiUrl } = enviroment
@Injectable({
  providedIn: 'root'
})
export class PokemonCatalogueService {

  constructor(private readonly http: HttpClient) { }

  private _pokemonList: Pokemon[] = [];
  private _error: string = "";
  private _loading: boolean = false;


  get pokemonList(): Pokemon[] {
    return this._pokemonList
  }

  get error(): string {
    return this._error
  }

  get loading(): boolean {
    return this._loading
  }


  findAllPokemon(): void{

    this.http.get<RootObject>(pokeApiUrl)
      .pipe(
        finalize( () => this._loading = false)
      )
      .subscribe({
        next: (root: RootObject) => {
          this._pokemonList = root.results
        }
        ,
        error: (error: HttpErrorResponse) => {
          this._error = error.message
        }
      
      })
  }

  pokemonByName(name: string): Pokemon | undefined {
    return this._pokemonList.find((pokemon: Pokemon) => pokemon.name === name)
  }
}

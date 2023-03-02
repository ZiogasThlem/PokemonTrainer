import { Injectable } from '@angular/core';
import { Trainer } from '../models/trainer.model';
import { StorageUtil } from '../utils/storage.util'
import { StorageKeys } from '../enums/storage-keys.enum';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  // trainer is initialized as private instance
  // of Trainer type with getter and setter
  private _trainer?: Trainer;
  get trainer(): Trainer | undefined {
    return this._trainer
  }
  set trainer(trainer: Trainer | undefined) {
    StorageUtil.storageSave<Trainer>(StorageKeys.Trainer, trainer!)
    this._trainer = trainer
  }

  constructor() { 
    this._trainer = StorageUtil.storageRead<Trainer>(StorageKeys.Trainer)
  }

  // checks if pokemon exists in trainer's collection
  public isInCollection(pokemonName: string): boolean{
    if (!this._trainer) return false
    return Boolean(this.trainer?.pokemon.find(
      (pokemon: Pokemon) => pokemon.name === pokemonName))
  }

  // "pushes" pokemon to trainer's collection, thus
  // adding it to Pokemon array
  public addToCollection(pokemon: Pokemon): void {
    if(!this._trainer) return
      this._trainer.pokemon.push(pokemon)
  }

  // filtering collection from non-collected pokemon,
  // thus removes pokemon from collection
  public removeFromCollection(pokemonName:string): void{
    if(!this._trainer) return
    this._trainer.pokemon = this._trainer?.pokemon.filter((pokemon: Pokemon) => pokemon.name != pokemonName)
  }
}

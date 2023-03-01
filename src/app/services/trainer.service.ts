import { Injectable } from '@angular/core';
import { Trainer } from '../models/trainer.model';
import { StorageUtil } from '../utils/storage.util'
import { StorageKeys } from '../enums/storage-keys.enum';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  private _trainer?: Trainer;

  get trainer(): Trainer | undefined {
    return this._trainer
  }

  set trainer(trainer: Trainer | undefined) {
    StorageUtil.storageSave<Trainer>(StorageKeys.Trainer, trainer!)
    this._trainer = trainer
  }
  constructor() { 
    this._trainer = StorageUtil.StorageRead<Trainer>(StorageKeys.Trainer)

  }
  public isInCollection(pokemonName: string): boolean{
    if (this._trainer)
      return Boolean(this.trainer?.pokemon.find((pokemonObjName: string) => pokemonObjName === pokemonName))
    return false
  }
  public addToCollection(pokemonName: string): void {
    if(this._trainer)[
      this._trainer.pokemon.push(pokemonName)
    ]
   }
   public removeFromCollection(pokemonName:string): void{
    if(!this._trainer) return
    this._trainer.pokemon = this._trainer?.pokemon.filter((pokemonObjName: string) => pokemonObjName != pokemonName)
   }
}

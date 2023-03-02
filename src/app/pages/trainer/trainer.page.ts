import { Component } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { Trainer } from 'src/app/models/trainer.model';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.page.html',
  styleUrls: ['./trainer.page.css']
})
export class TrainerPage {
  
  constructor(
    private trainerService: TrainerService
  ) { }

  get trainer(): Trainer | undefined {
    return this.trainerService.trainer
  }

  // loads trainer's current collection,
  // returns empty array if they haven't
  // collected any pokemon yet
  get collection(): Pokemon[] {
    if (this.trainerService.trainer){
      return this.trainerService.trainer?.pokemon
    }
    return []
  }

}

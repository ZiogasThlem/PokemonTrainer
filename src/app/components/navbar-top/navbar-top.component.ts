import { Component } from '@angular/core';
import { Trainer } from 'src/app/models/trainer.model';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-navbar-top',
  templateUrl: './navbar-top.component.html',
  styleUrls: ['./navbar-top.component.css']
})
export class NavbarTopComponent {

  get trainer(): Trainer | undefined {
    return this.trainerSerice.trainer
  }

  constructor(private readonly trainerSerice: TrainerService) { }


}

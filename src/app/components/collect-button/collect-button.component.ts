import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Trainer } from 'src/app/models/trainer.model';
import { CollectionService } from 'src/app/services/collection.service';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-collect-button',
  templateUrl: './collect-button.component.html',
  styleUrls: ['./collect-button.component.css']
})
export class CollectButtonComponent implements OnInit{

  @Input() pokemonName: string = ""
  public isCollected: boolean = false
  public loading: boolean = false 



  constructor(
    private readonly collectionService: CollectionService,
    private readonly trainerService : TrainerService
  ) { }

  ngOnInit(): void {
    this.isCollected = this.trainerService.isInCollection(this.pokemonName)
  }

// 
  onCollectClick(): void {
    this.loading = true
    this.collectionService.collect(this.pokemonName)
      .subscribe({
        next: (trainer: Trainer) => {
          this.loading = false
          this.isCollected = this.trainerService.isInCollection(this.pokemonName)
        },
        error: (error: HttpErrorResponse) => {
          console.error(error)
        }
      })
  }

}

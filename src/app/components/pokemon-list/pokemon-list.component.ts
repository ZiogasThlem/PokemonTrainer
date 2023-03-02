import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit{

  @Input() pokemonList: Pokemon[] = []
  
  
  // configuring pagination by
  // starting from page the 1st page
  // and displaying 15 pokemon per page
  page: number = 1
  itemsToDisplay: number = 15

  pageChanged(event: number) {
    this.page = event
  }
  // pagination config end

  ngOnInit(): void {
  }
  
}

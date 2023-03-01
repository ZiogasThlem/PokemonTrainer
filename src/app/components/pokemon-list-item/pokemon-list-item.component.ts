import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';


@Component({
  selector: 'app-pokemon-list-item',
  templateUrl: './pokemon-list-item.component.html',
  styles: [`span {
              font-size: 35px;
          }`]
})
export class PokemonListItemComponent {

  @Input() pokemon?:Pokemon;

}

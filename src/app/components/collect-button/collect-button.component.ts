import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-collect-button',
  templateUrl: './collect-button.component.html',
  styleUrls: ['./collect-button.component.css']
})
export class CollectButtonComponent {

  @Input() pokemonName: string = ""


  onCollectClick(): void {
    alert("collected " + this.pokemonName +"!")
  }

}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TPokemonTypes } from '../../types';

@Component({
  selector: 'app-pokeball',
  templateUrl: './pokeball.component.html',
  styleUrls: ['./pokeball.component.scss']
})
export class PokeballComponent {
  public _type!: TPokemonTypes;
  @Output() onSelected: EventEmitter<TPokemonTypes> = new EventEmitter<TPokemonTypes>();

  @Input() set type(v: TPokemonTypes) {
    this._type = v;
  };

  selected(pokemonType: TPokemonTypes) {
    this.onSelected.emit(pokemonType);
  }

}

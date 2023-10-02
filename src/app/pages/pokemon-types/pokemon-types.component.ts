import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/shared/services/pokemon.service';
import { AppTools } from 'src/app/shared/tools';
import { TPokemonTypes } from 'src/app/shared/types';

@Component({
  selector: 'app-pokemon-types',
  templateUrl: './pokemon-types.component.html',
  styleUrls: ['./pokemon-types.component.scss']
})
export class PokemonTypesComponent implements OnInit {
  public listType: TPokemonTypes[] = [];
  constructor(
    private readonly pokemonService: PokemonService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.pokemonService.getPokemonTypeList().subscribe({
      next: ({ results }) => {
  
        this.listType = AppTools.sortAscByName(results)
      }
    })
  }

  getPokemons(type: TPokemonTypes) {
    this.router.navigate([`/pokemon-type/${type.name}`], { state: { type } })
  }


}

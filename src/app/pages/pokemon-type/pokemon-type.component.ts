import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/shared/services/pokemon.service';
import { AppTools } from 'src/app/shared/tools';
import { TPokemon, TTypeRef, TPokemonTypes, TPokemonRef } from 'src/app/shared/types';

@Component({
  selector: 'app-pokemon-type',
  templateUrl: './pokemon-type.component.html',
  styleUrls: ['./pokemon-type.component.scss']
})
export class PokemonTypeComponent implements OnInit {
  public page: number = 1;
  public pokemonType!: TPokemonTypes;
  public pokemonByTypeList: TPokemonRef[] = [];
  public pokemonByTypePaginate: TPokemon[] = [];

  public form: FormGroup = new FormGroup({
    page: new FormControl(this.page, Validators.required)
  })

  constructor(private router: Router, private readonly pokemonService: PokemonService) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation) {
      const state = navigation.extras.state as any;
      this.pokemonType = state.type as TPokemonTypes;
    }
  }

  ngOnInit(): void {

    this.pokemonService.getPokemonType(this.pokemonType.url).subscribe({
      next: (result) => {
        this.pokemonByTypeList = result.pokemon.map(r => r.pokemon);
        this.pokemonByTypeList = AppTools.sortAscByName(this.pokemonByTypeList);
        this.paginatePokemonByType(this.page);
      }
    });

    this.form.get('page')?.valueChanges.subscribe((page:number)=>{
      if (!page) {
        page = 1;
      }
      this.paginatePokemonByType(page);
    })


  }

  paginatePokemonByType(page: number) {
    const { start, end } = AppTools.paginate(page);
    this.pokemonByTypePaginate = this.typeRefToPokemon(this.pokemonByTypeList).slice(start, end)
  }

  typeRefToPokemon(list: TPokemonRef[]) {
    return list.map(item => ({
      id: Number(item.url.split('/pokemon/')?.at(1)?.replace('/', '')),
      name: item.name
    }))
  }

  back() {
    this.router.navigate(['/'])
  }

  next() {
    this.page++;
    this.form.setValue({page: this.page})
    this.paginatePokemonByType(this.page);
  }

  prev() {
    if (this.page > 1) {
      this.page--;
      this.form.setValue({page: this.page})
      this.paginatePokemonByType(this.page);
    }

  }
}

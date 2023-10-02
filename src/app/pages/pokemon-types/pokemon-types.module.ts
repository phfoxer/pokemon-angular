import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonTypesComponent } from './pokemon-types.component';
import { RouterModule, Routes } from '@angular/router';
import { PokeballModule } from 'src/app/shared/components/pokeball/pokeball.module';

const routes:Routes = [{
  path: '',
  component: PokemonTypesComponent
}]

@NgModule({
  declarations: [
    PokemonTypesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PokeballModule
  ]
})
export class PokemonTypesModule { }

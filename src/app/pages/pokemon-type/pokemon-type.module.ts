import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonTypeComponent } from './pokemon-type.component';
import { RouterModule, Routes } from '@angular/router';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { ButtonModule } from 'src/app/shared/components/button/button.module';
import { InputModule } from 'src/app/shared/components/input/input.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes:Routes = [{
  path: '',
  component: PokemonTypeComponent
}]

@NgModule({
  declarations: [
    PokemonTypeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CardModule,
    InputModule,
    ButtonModule,
    ReactiveFormsModule
  ]
})
export class PokemonTypeModule { }

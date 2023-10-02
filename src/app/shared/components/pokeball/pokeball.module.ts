import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeballComponent } from './pokeball.component';



@NgModule({
  declarations: [
    PokeballComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PokeballComponent
  ]
})
export class PokeballModule { }

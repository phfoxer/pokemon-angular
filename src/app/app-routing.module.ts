import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: ()=> import('src/app/pages/pokemon-types/pokemon-types.module').then(r=>r.PokemonTypesModule)
  },
  {
    path: 'pokemon-type/:type',
    loadChildren: ()=> import('src/app/pages/pokemon-type/pokemon-type.module').then(r=>r.PokemonTypeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

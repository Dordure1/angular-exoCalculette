import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CalculetteComponent} from './calculette/calculette.component';
import{Four0fourComponent} from './four0four/four0four.component'

const routes: Routes = [
  {path:"",component:CalculetteComponent},
  {path:"**",component:Four0fourComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

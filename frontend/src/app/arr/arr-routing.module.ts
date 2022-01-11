import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArrComponent } from './arr.component';
const routes: Routes = [
  {
    path: '',
    component: ArrComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArrRoutingModule { }
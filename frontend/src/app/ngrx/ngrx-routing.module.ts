import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgrxComponent } from './ngrx.component';
import { AuthGuard } from './../helpers/auth.guard';
const routes: Routes = [
  {
    path: '',
    component: NgrxComponent,
    // canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgrxRoutingModule {}

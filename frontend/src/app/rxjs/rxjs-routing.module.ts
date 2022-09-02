import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RxjsComponent } from './rxjs.component';
import { AuthGuard } from './../helpers/auth.guard';
const routes: Routes = [
  {
    path: '',
    component: RxjsComponent,
    // canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule { }
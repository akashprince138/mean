import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'rxjs',
    loadChildren: () => import('./rxjs/rxjs.module').then((m) => m.RxjsModule),
  },
  // {
  //   path: 'ngrx',
  //   loadChildren: () => import('./ngrx/ngrx.module').then((m) => m.NgrxModule),
  // },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then((m) => m.ListModule),
  },
  {
    path: 'user-list',
    loadChildren: () =>
      import('./user-list/user-list.module').then((m) => m.UserListModule),
  },
  {
    path: 'add-user',
    loadChildren: () =>
      import('./add-user/add-user.module').then((m) => m.AddUserModule),
  },
  {
    path: 'edit-user/:id',
    loadChildren: () =>
      import('./edit-user/edit-user.module').then((m) => m.EditUserModule),
  },
  {
    path: 'arr',
    loadChildren: () => import('./arr/arr.module').then((m) => m.ArrModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

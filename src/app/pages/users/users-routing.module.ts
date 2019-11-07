import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
// import { UserListResolver } from './list/list.resolver';

const PROVIDERS = [
  // UserListResolver
]

const routes: Routes = [{
  path: '',
  component: UsersComponent,
}]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
  providers: [
    ...PROVIDERS,
  ]
})

export class UsersRoutingModule {}

export const routedComponents = [
  UsersComponent,
]
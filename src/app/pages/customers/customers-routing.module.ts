import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers.component';
// import { UserListResolver } from './list/list.resolver';

const PROVIDERS = [
  // UserListResolver
]

const routes: Routes = [{
  path: '',
  component: CustomersComponent,
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

export class CustomersRoutingModule {}

export const routedComponents = [
  CustomersComponent,
]
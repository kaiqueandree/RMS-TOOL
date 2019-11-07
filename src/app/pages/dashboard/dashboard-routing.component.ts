import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ChartjsComponent } from './chart/chartjs.component';
// import { UserListResolver } from './list/list.resolver';

const PROVIDERS = [
  // UserListResolver
]

const routes: Routes = [{
  path: '',
  component: DashboardComponent,
  children: [{
    path: "chart",
    component: ChartjsComponent,
  }]
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

export class DashboardRoutingModule {}

export const routedComponents = [
  DashboardComponent,
  ChartjsComponent,
]
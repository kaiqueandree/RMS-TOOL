import { ExtraOptions, RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
  path: 'pages',
  loadChildren: 'src/app/pages/pages.module#PagesModule',
  },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
]

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
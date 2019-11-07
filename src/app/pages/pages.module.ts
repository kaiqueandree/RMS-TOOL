import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { ThemeModule } from '../@theme/theme.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesMenuProvider } from './pages-menu';

const PAGES_COMPONENT = [
  PagesComponent
]

@NgModule({
  imports: [
    PagesRoutingModule,
    DashboardModule,
    ThemeModule
  ],
  declarations: [...PAGES_COMPONENT],
  providers: [
    PagesMenuProvider,
  ],
})
export class PagesModule { }

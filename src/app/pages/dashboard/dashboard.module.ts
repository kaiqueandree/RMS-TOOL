import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { routedComponents, DashboardRoutingModule } from './dashboard-routing.component';
import { ChartModule } from 'angular2-chartjs';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxEchartsModule } from 'ngx-echarts';

import { ChartjsBarComponent } from './chart/chartjs-bar.component';
import { ChartjsLineComponent } from './chart/chartjs-line.component';
import { ChartjsPieComponent } from './chart/chartjs-pie.component';
import { ChartjsBarHorizontalComponent } from './chart/chartjs-bar-horizontal.component';

const components = [
  ChartjsBarComponent,
  ChartjsLineComponent,
  ChartjsPieComponent,
  ChartjsBarHorizontalComponent,
]

@NgModule({
  imports: [
    ThemeModule,
    DashboardRoutingModule,
    NgxEchartsModule, 
    NgxChartsModule, 
    ChartModule
  ],
  declarations: [
    ...routedComponents,
    ...components,
  ],
})
export class DashboardModule { }

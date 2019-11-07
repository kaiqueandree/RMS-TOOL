import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MomentModule } from 'ngx-moment';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

import { AppComponent } from './app.component';
import { ThemeModule } from './@theme/theme.module';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from './@core/core.module';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

const DEPENDENCIES = [
  BrowserModule,
  BrowserAnimationsModule,
  HttpClientModule,
  LoggerModule.forRoot({
    level: environment.production ? NgxLoggerLevel.OFF : NgxLoggerLevel.DEBUG,
  }),
  NgxChartsModule,
  MomentModule
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ...DEPENDENCIES,
    AppRoutingModule,

    NgxChartsModule,

    ThemeModule.forRoot(),
    NgbModule.forRoot(),
    CoreModule.forRoot(),

  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '/',
    },
    // {
    //   provide: LOCALE_ID,
    //   useValue: 'pt-BR',
    // },
  ],
  bootstrap: [AppComponent]
})

export class AppModule { 
}
import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from './data/login.service';
import { Login } from './models/login';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { MockDataModule } from './models/mock-data.module';
import { LayoutService } from './utils/layout.service';

export const DATA_SERVICES = [
  { provide: LoginService, useClass: Login}
]

export const CORE_PROVIDERS = [
  ...MockDataModule.forRoot().providers,
  ...DATA_SERVICES,
  LayoutService
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: CoreModule,
      providers: [
        ...CORE_PROVIDERS,
      ],
    };
  }
}

import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NbActionsModule,
  NbCardModule,
  NbLayoutModule,
  NbMenuModule,
  NbRouteTabsetModule,
  NbSearchModule,
  NbSidebarModule,
  NbTabsetModule,
  NbThemeModule,
  NbUserModule,
  NbCheckboxModule,
  NbPopoverModule,
  NbContextMenuModule,
  NbProgressBarModule,
  NbCalendarModule,
  NbCalendarRangeModule,
  NbStepperModule,
  NbButtonModule,
  NbInputModule,
  NbAccordionModule,
  NbDatepickerModule,
  NbDialogModule,
  NbWindowModule,
  NbListModule,
  NbToastrModule,
  NbAlertModule,
  NbSpinnerModule,
  NbRadioModule,
  NbSelectModule,
  NbChatModule,
  NbTooltipModule,
  NbCalendarKitModule,
} from '@nebular/theme';
import { OneColumnLayoutComponent } from './layout/one-column/one-column.layout';
import { HeaderComponent, FooterComponent } from './components';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EvaIconsPipe, CapitalizePipe, RoundPipe, PluralPipe, TimingPipe } from './pipes';

const COMPONENTS = [
  OneColumnLayoutComponent,
  HeaderComponent,
  FooterComponent,
]

const BASE_MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule
];

const PIPES = [
  EvaIconsPipe,
  CapitalizePipe,
  RoundPipe,
  PluralPipe,
  TimingPipe
]

const NB_MODULES = [
  NbCardModule,
  NbLayoutModule,
  NbTabsetModule,
  NbRouteTabsetModule,
  NbDatepickerModule,
  NbMenuModule,
  NbUserModule,
  NbActionsModule,
  NbSearchModule,
  NbSidebarModule,
  NbCheckboxModule,
  NbPopoverModule,
  NbContextMenuModule,
  NbStepperModule,
  NgbModule
];

const NB_THEME_PROVIDERS = [
  ...NbThemeModule.forRoot({ name: 'corporate'}).providers,
  ...NbSidebarModule.forRoot().providers,
  ...NbDatepickerModule.forRoot().providers,
  ...NbMenuModule.forRoot().providers
]

@NgModule({
  imports: [...BASE_MODULES, ...NB_MODULES],
  exports: [...BASE_MODULES, ...NB_MODULES, ...COMPONENTS],
  declarations: [...COMPONENTS, ...PIPES],
})
export class ThemeModule { 

  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: ThemeModule,
      providers: [...NB_THEME_PROVIDERS]
    };
  }
}

import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { AchievementComponent } from './achievement.component';
import { AchievementRoutingModule } from './achievement-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';

const COMPONENTS = [
  AchievementComponent,
]

@NgModule({
  imports: [
    ThemeModule,
    AchievementRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...COMPONENTS,
  ],
})
export class AchievementModule { }

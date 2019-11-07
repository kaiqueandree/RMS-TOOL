import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { UserService } from '../data/user.service';
// import { BaseService } from './base.service';
// import { User } from '../models/user';
import { AchievementService } from './achievement.service';
import { Achievement } from '../models/achievement';

const SERVICES = [
  {provide: AchievementService, useClass: Achievement},
];

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    ...SERVICES,
  ],
})
export class DataModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: DataModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}

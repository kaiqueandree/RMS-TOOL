import { Component, OnInit, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'ngx-one-column-layout',
  template: `
  <nb-layout>

  <nb-layout-header fixed>
    <ngx-header></ngx-header>
  </nb-layout-header>

  <nb-sidebar class="menu-sidebar" tag="menu-sidebar" responsive>
    <ng-content select="nb-menu"></ng-content>
  </nb-sidebar>

  <nb-layout-column>
    <ng-content select="router-outlet"></ng-content>
  </nb-layout-column>

  <nb-layout-footer fixed>
    <ngx-footer></ngx-footer>
  </nb-layout-footer>

</nb-layout>
  `,
  styleUrls: ['./one-column.layout.scss'],
})

export class OneColumnLayoutComponent implements OnDestroy {

  private alive = true;

  currentTheme: string;

  constructor(protected themeService: NbThemeService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.currentTheme = theme.name;
    });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
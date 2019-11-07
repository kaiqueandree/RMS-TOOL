import { Component } from '@angular/core';
import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'ngx-pages',
  template: `
  <ngx-one-column-layout>
    <nb-menu [items]="menu"></nb-menu>
    <router-outlet></router-outlet>
  </ngx-one-column-layout>
  `,
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent {

  constructor() { }

  menu = MENU_ITEMS;
}

import { Component, Input, OnInit } from '@angular/core';
import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { LayoutService } from 'src/app/@core/utils/layout.service';
import { LoginService } from 'src/app/@core/data/login.service';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  @Input() position = 'normal';

  login: any;

  loginMenu = [{ title: 'Profile' }, { title: 'Log out' }];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private loginService: LoginService,
              private layoutService: LayoutService) {
  }

  ngOnInit() {
    this.loginService.getLogin()
    .subscribe((logins: any) => this.login = logins.nick);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();
    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }
}
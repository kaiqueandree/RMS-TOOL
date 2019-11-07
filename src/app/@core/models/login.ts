import { of as observableOf,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Contacts, RecentUsers, LoginService } from '../data/login.service';

@Injectable()
export class Login extends LoginService {

  private time: Date = new Date;

  private logins = {
    nick: { name: 'Kaique Lima', picture: 'assets/images/nick.png' },
    eva: { name: 'Eva Moor', picture: 'assets/images/eva.png' },
    jack: { name: 'Jack Williams', picture: 'assets/images/jack.png' },
    lee: { name: 'Lee Wong', picture: 'assets/images/lee.png' },
    alan: { name: 'Alan Thompson', picture: 'assets/images/alan.png' },
    kate: { name: 'Kate Martinez', picture: 'assets/images/kate.png' },
  };
  private types = {
    mobile: 'mobile',
    home: 'home',
    work: 'work',
  };
  private contacts: Contacts[] = [
    { login: this.logins.nick, type: this.types.mobile },
    { login: this.logins.eva, type: this.types.home },
    { login: this.logins.jack, type: this.types.mobile },
    { login: this.logins.lee, type: this.types.mobile },
    { login: this.logins.alan, type: this.types.home },
    { login: this.logins.kate, type: this.types.work },
  ];
  private recentUsers: RecentUsers[]  = [
    { login: this.logins.alan, type: this.types.home, time: this.time.setHours(21, 12)},
    { login: this.logins.eva, type: this.types.home, time: this.time.setHours(17, 45)},
    { login: this.logins.nick, type: this.types.mobile, time: this.time.setHours(5, 29)},
    { login: this.logins.lee, type: this.types.mobile, time: this.time.setHours(11, 24)},
    { login: this.logins.jack, type: this.types.mobile, time: this.time.setHours(10, 45)},
    { login: this.logins.kate, type: this.types.work, time: this.time.setHours(9, 42)},
    { login: this.logins.kate, type: this.types.work, time: this.time.setHours(9, 31)},
    { login: this.logins.jack, type: this.types.mobile, time: this.time.setHours(8, 0)},
  ];

  getLogin(): Observable<any> {
    return observableOf(this.logins);
  }

  getContacts(): Observable<Contacts[]> {
    return observableOf(this.contacts);
  }

  getRecentUsers(): Observable<RecentUsers[]> {
    return observableOf(this.recentUsers);
  }
}
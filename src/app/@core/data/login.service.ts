import { Observable } from 'rxjs';

export interface Logins {
  name: string;
  picture: string;
}

export interface Contacts {
  login: Logins;
  type: string;
}

export interface RecentUsers extends Contacts {
  time: number;
}

export abstract class LoginService {
  abstract getLogin(): Observable<Logins[]>;
  abstract getContacts(): Observable<Contacts[]>;
  abstract getRecentUsers(): Observable<RecentUsers[]>;
}

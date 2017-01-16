import { Injectable } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Injectable()
export class AuthService {
  private loggedIn = false;

  constructor() {
    this.loggedIn = !!Cookie.get('loggedIn');
  }

  login() {
    Cookie.set('loggedIn', '1');
    this.loggedIn = true;
  }

  logout() {
    Cookie.delete('loggedIn');
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }

}

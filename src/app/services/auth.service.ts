import { Injectable } from '@angular/core';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Injectable()
export class AuthService {
  private loggedIn = false;

  constructor(private cookie: CookieService) {
    this.loggedIn = this.cookie.get('loggedIn') === '1';
  }

  login() {
    this.cookie.put('loggedIn', '1');
    this.loggedIn = true;
  }

  logout() {
    this.cookie.remove('loggedIn');
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }

}

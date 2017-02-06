/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';


describe('AuthServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService, CookieService]
    });
  });

  it('should ...', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));

  it('should set logged in to true and cookie to 1', inject([AuthService, CookieService], (authService: AuthService, cookieService: CookieService) => {
    authService.login();
    expect(authService.isLoggedIn()).toBe(true);
    expect(cookieService.get('loggedIn')).toBe('1');
  }));

  it('should set logged in to false and and remove cookie', inject([AuthService, CookieService], (authService: AuthService, cookieService: CookieService) => {
    authService.login();
    authService.logout();
    expect(authService.isLoggedIn()).toBe(false);
    expect(cookieService.get('loggedIn')).toBe(undefined);
  }));
});

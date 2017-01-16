import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { AuthService } from './../services/auth.service'


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private auth: AuthService) {}

    canActivate() {
        if (!this.auth.isLoggedIn()) {
            alert('You should be logged in to see this page');
            return false;
        }
        return true;
    }
}
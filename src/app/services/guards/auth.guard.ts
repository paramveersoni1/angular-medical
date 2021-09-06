import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UtilService } from '../util/util.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(
        protected router: Router,
        private uiService: UtilService
    ) { }

    canActivate() {
        if (!this.uiService.getToken()) {
            return true;
        }
        this.router.navigate(['/users']);
        return false;
    }

}

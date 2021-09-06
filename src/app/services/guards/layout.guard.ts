import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { MessageService } from '../message/message.service';
import { SuccessErrorConst } from 'src/app/core/successErrorConst';
import { UtilService } from '../util/util.service';

@Injectable({
  providedIn: 'root'
})
export class LayoutGuard implements CanActivate {

  constructor(
    private router: Router,
    private message: MessageService,
    private uiService: UtilService
  ) { }

  canActivate(): boolean {
    if (!!this.uiService.getToken()) {
      return true;
    }
    localStorage.clear();
    this.router.navigate(['/login']);
    this.message.toast('info', SuccessErrorConst.loginAgain);
    return false;
  }

}

import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../services/login.service';

export const loginGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state:RouterStateSnapshot) => {

    const login = inject(LoginService);
    if(login.isLoggedIn()) {
      window.location.reload();
      return false;
    }

    return true;
};

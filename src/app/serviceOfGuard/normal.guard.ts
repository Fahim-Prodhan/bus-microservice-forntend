import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../services/login.service';

export const normalGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot) => {
  const login = inject(LoginService)
  const router = inject(Router)

  if(login.isLoggedIn() && login.getUserRole()=="NORMAL") {
    return true;
    
  }
  login.logout();
  router.navigate(['login'])
  return false;
};

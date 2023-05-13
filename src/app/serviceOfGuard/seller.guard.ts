import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../services/login.service';

export const sellerGuard: CanActivateFn = (
  route:ActivatedRouteSnapshot, 
  state:RouterStateSnapshot) => {

    const login=inject(LoginService);
    const router = inject(Router)

    if(login.isLoggedIn() && login.getUserRole()=="SELLER") {
      return true;
      
    }
    login.logout();
    router.navigate(['login'])
    return false;

  return true;
};

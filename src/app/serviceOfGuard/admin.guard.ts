import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginService } from '../services/login.service';
import { Observable } from 'rxjs';
import { Inject, inject } from '@angular/core';

export const adminGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot) => {

  const login = inject(LoginService)
  const router = inject(Router)

  if(login.isLoggedIn() && login.getUserRole()=="ADMIN") {
    return true;
    
  }
  login.logout();
  router.navigate(['login'])
  return false;
  
};

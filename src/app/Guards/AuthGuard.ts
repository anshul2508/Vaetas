import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate{

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> |
    boolean {
    const isLoggedIn = !localStorage.getItem('my-login-token');

    if (isLoggedIn) {
      return true;
    }else {
      this.router.navigate(['login']);
      return false;
    }
  }
}

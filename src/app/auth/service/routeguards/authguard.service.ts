import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { AuthService } from '../authservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot):
              boolean | UrlTree | Promise<boolean| UrlTree > | Observable<boolean | UrlTree> {
        return this.authService.playGroundUser.pipe(take(1), map(user => {
          const isUserAuthenticated = !!user;
          if ( isUserAuthenticated && user.emailAddressValidated === false ) {
            console.log('inside ( isUserAuthenticated && !user.emailAddressValidated )', isUserAuthenticated,
                        user.emailAddressValidated);
            return true;
          }
          return this.router.createUrlTree(['/auth/login']);
        }));
  }
}

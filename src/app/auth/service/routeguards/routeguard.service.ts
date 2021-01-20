import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, take } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot):
              boolean | UrlTree | Promise<boolean| UrlTree > | Observable<boolean | UrlTree> {
        return this.authService.playGroundUser.pipe(take(1), map(user => {
          const isUserAuthenticated = !!user;
          if ( isUserAuthenticated && user.emailAddressValidated ) {
            return true;
          } else if ( isUserAuthenticated && !!user.emailAddressValidated ) {
            return this.router.createUrlTree(['/appsLanding']);
          }
          return this.router.createUrlTree(['/auth/login']);
        }));
  }
}

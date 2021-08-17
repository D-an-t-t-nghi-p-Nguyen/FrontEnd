import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserServiceService } from '../BackEnd/UserService/user-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

    role : number;
    constructor(
        private _serveceUser : UserServiceService,
         private _router : Router
         
    ) {this._serveceUser.roleEntity.subscribe(y => this.role = y);}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const user = this._serveceUser.userValue && this.role ==1 ;
        if (user ) {
            // authorised so return true
            return true;
        }else{
            this._router.navigate(['/homeweb'], { queryParams: { returnUrl: state.url }});
            return false;
        }
    }
    
}
@Injectable({ providedIn: 'root' })
export class AuthGuard_User implements CanActivate {
    constructor(
        private _serveceUser : UserServiceService,
         private _router : Router
         
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const user = this._serveceUser.userValue  ;
        if (user ) {
            // authorised so return true
            return true;
        }


        this._router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
  


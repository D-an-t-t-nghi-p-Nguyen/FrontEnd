import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserServiceService } from '../BackEnd/UserService/user-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  role : number;
  constructor(
      private _serveceUser : UserServiceService,
       private _router : Router
       
  ) {this._serveceUser.roleEntity.subscribe(y => this.role = y);}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      const user = this._serveceUser.userValue && this.role ==1 ;
      if (user ) {
          return true;
      }else{
          this._router.navigate([''], { queryParams: { returnUrl: state.url }});
          return false;
      }
  }
  
}

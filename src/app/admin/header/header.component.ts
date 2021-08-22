import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';import { User } from 'src/app/BackEnd/UserModel/user';
import { UserServiceService } from 'src/app/BackEnd/UserService/user-service.service';
;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  
  user:User;
  role : number;

  constructor(
    private router: Router,
    private _serveceUser:UserServiceService
    ) {
      this._serveceUser.userEntity.subscribe(x => this.user = x);
      this._serveceUser.roleEntity.subscribe(y => this.role = y);
    }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

  

  logout(){
    this._serveceUser.logout()
  }

}

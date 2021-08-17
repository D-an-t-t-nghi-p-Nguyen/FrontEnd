import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/BackEnd/UserModel/user';
import { UserServiceService } from 'src/app/BackEnd/UserService/user-service.service';
import { VnService } from 'src/app/BackEnd/WebService/vn.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user:User;
  urlavatar:string;
  role : number;

  constructor(
    private vnservice:VnService,
    private router:Router,
    private _serveceUser:UserServiceService
  ) { 
    this._serveceUser.userEntity.subscribe(x => this.user = x);
    this._serveceUser.roleEntity.subscribe(y => this.role = y);
    this._serveceUser.AvatarEntity.subscribe(x => this.urlavatar = x);
  }

  ngOnInit(): void {
    this._serveceUser.findByEmailID(this.user).subscribe(data=>{
      this.user = data;
      this.urlavatar=   data?.avatar;
    });
  }
  
  logout(){
    this._serveceUser.logout()
  }
}

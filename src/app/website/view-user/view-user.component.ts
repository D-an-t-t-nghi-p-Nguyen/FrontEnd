import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/BackEnd/UserModel/user';
import { UserServiceService } from 'src/app/BackEnd/UserService/user-service.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {

  user:User;
  urlavatar:string;
  role : number;

  constructor(
    private _serveceUser:UserServiceService,
    private _router:Router
    ) {
    this._serveceUser.userEntity.subscribe(x => this.user = x);
    this._serveceUser.roleEntity.subscribe(y => this.role = y);
    this._serveceUser.AvatarEntity.subscribe(x => this.urlavatar = x)
   }

  ngOnInit(): void {
    this._serveceUser.findByEmailID(this.user).subscribe(data=>{
      this.user = data;
      this.urlavatar=   data?.avatar;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../BackEnd/UserModel/user-model';
import { UserServiceService } from '../BackEnd/UserService/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = new UserModel();
  msg = '';
    constructor(
      private _userService :UserServiceService, 
      private _roter :Router
      ) {
       if (this._userService.userValue) {
        this._roter.navigate(['/admin']);
      }
     }
     
  
    ngOnInit(): void {
    }
  
    loginUser(){
      this._userService.LoginUser(this.user).subscribe(data=>{
        this._roter.navigate(["/admin"]);
        if(typeof(Storage)!=="undefined"){
          localStorage.setItem('emailID', JSON.stringify(this.user.emailId));
          localStorage.setItem('role', JSON.stringify(data.role_id.id));
          localStorage.setItem('avatar', JSON.stringify(data.avatar));
        } else {
          alert('Trình duyệt của bạn đã quá cũ. Hãy nâng cấp trình duyệt ngay!');
        }
  
      },
      error => {
        console.log("exception occuured");
        this.msg = "Bad credentails, please enter vaild email and password";
      }
      )
    }

}

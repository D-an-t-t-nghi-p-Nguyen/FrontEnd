import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoleModel } from '../BackEnd/UserModel/role-model';
import { UserModel } from '../BackEnd/UserModel/user-model';
import { UserServiceService } from '../BackEnd/UserService/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  listRole: RoleModel[];
  user = new UserModel();
  selectedrole: number=2 ;
  OneFile: File = null
  registerForm:FormGroup;

  constructor(
    private userService: UserServiceService, 
    private _roter: Router,
    ) { 
    }


  ngOnInit(): void {
     this.AddRoles();
  }

  Selected(event) {
    this.OneFile = event.target.files[0];
  }

  selectRoles (event){
    this.selectedrole = event.target.value;
  }
  Submit() {
    const registerData = {
      userName : this.user.userName,
      emailId  : this.user.emailId,
      password : this.user.password,
      role_id : this.selectedrole
    }
    console.log(registerData);
    this.userService.SaveUser(registerData).subscribe(data => {
      this.userService.UploadFile(this.OneFile, data.id).subscribe(data => {
        console.log(data);
        this.goToUserList();
      })

    })
  }

  goToUserList() {
    this._roter.navigate(['/login'])
  }

  AddRoles(){
    this.userService.GetRole().subscribe(
      response => {
        this.listRole = response
      }
    );
  }

}

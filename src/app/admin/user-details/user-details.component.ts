import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/BackEnd/UserModel/user';
import { UserServiceService } from 'src/app/BackEnd/UserService/user-service.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  id :number;
  user:User;
  imageUrl: string;
    constructor(
      private _serviceUser : UserServiceService,
      private _router : ActivatedRoute
      ) { }
  
    ngOnInit(): void {
      this.id=this._router.snapshot.params['id'];
      this.user =new User();
      this._serviceUser.GetUserById(this.id).subscribe(data=>{
        this.user=data;
        this.imageUrl = "../../assets/images/" + data.avatar;
      })
    }

}

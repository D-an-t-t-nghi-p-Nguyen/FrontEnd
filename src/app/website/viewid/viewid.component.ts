import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/BackEnd/UserModel/user';
import { UserServiceService } from 'src/app/BackEnd/UserService/user-service.service';
import { CommentRequest } from 'src/app/BackEnd/WebModel/comment-request';
import { Comments } from 'src/app/BackEnd/WebModel/comments';
import { Oder } from 'src/app/BackEnd/WebModel/oder';
import { OderRequest } from 'src/app/BackEnd/WebModel/oder-request';
import { Vn } from 'src/app/BackEnd/WebModel/vn';
import { VnService } from 'src/app/BackEnd/WebService/vn.service';

@Component({
  selector: 'app-viewid',
  templateUrl: './viewid.component.html',
  styleUrls: ['./viewid.component.scss']
})
export class ViewidComponent implements OnInit {

  id:number;
  item:Vn;
  urlImage:string;
  user:User;
  urlavatar:string;
  role : number;
  oder1= new Oder();
  oders: OderRequest[];
  comment1=new Comments();
  comments: CommentRequest[];
  imageUrl: string;
  avatar:string;
  EmailId : string;

  constructor(
    private route:ActivatedRoute,
    private blogService:VnService,
    private _serveceUser:UserServiceService,
    ) {
      this._serveceUser.userEntity.subscribe(x => this.user = x);
      this._serveceUser.roleEntity.subscribe(y => this.role = y);
      this._serveceUser.AvatarEntity.subscribe(x => this.urlavatar = x)
     }

     ngOnInit(): void {
     }
}

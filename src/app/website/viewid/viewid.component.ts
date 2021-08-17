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
      this.id = this.route.snapshot.params['id'];
      this.item = new Vn();
      this.blogService.GetBlogById(this.id).subscribe( data => {
        this.item=data;
          this.urlImage = "./../../../assets/images/" + data.image;
        console.log(this.urlImage);
      });
      this._serveceUser.findByEmailID(this.user).subscribe(data=>{
        this.user = data;
        this.urlavatar=   data?.avatar;
      });
      this.ListComment()
      this.ListOder()
      this.EmailId = localStorage.getItem('emailID');
      this.avatar = localStorage.getItem('avatar');
    }
  
    ListComment(){
      this.blogService.GetCommentByMotelId(this.id).subscribe(data=>{
        this.comments=data.sort((a,b) => b.id - a.id)
      })
    }
    ListOder(){
      this.blogService.GetOderByBlogId(this.id).subscribe(data =>{
        this.oders=data.sort((a,b) =>b.id - a.id)
      })
    }
    Submit(){
      const createMotelData ={
        comment: this.comment1.comment,
        email: this.EmailId.split("\"")[1],
        motel_id:this.id
      }
  
      this.blogService.AddComment(createMotelData).subscribe(data=>{
      this.ListComment()
      this.comment1.comment ="";
      })
    }
    ngSubmit(){
      const createBlogData = {
        dateGo: this.oder1.dateGo,
        amount: this.oder1.amount,
        number: this.oder1.number,
        email: this.EmailId.split("\"")[1],
        motel_id:this.id
      }
      this.blogService.AddOder(createBlogData).subscribe(data=>{
        this.ListOder()
        this.oder1.dateGo ="";
        this.oder1.number ="";
        this.oder1.amount ="";
      });
    }

    //modal
    @ViewChild('content', { static: true }) public contentModal;
    public name: string;

    show(value:string){
        this.name = value;
        this.contentModal.show();
    }
}

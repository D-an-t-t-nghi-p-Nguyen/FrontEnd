import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsEntity } from 'src/app/BackEnd/NewsMdoel/news-entity';
import { NewsService } from 'src/app/BackEnd/NewsService/news.service';
import { User } from 'src/app/BackEnd/UserModel/user';
import { UserServiceService } from 'src/app/BackEnd/UserService/user-service.service';

@Component({
  selector: 'app-newsid',
  templateUrl: './newsid.component.html',
  styleUrls: ['./newsid.component.scss']
})
export class NewsidComponent implements OnInit {

  id:number;
  item:NewsEntity;
  urlImage:string;
  user:User;
  urlavatar:string;
  role : number;
  imageUrl: string;
  avatar:string;
  EmailId : string;

  constructor(
    private route:ActivatedRoute,
    private blogService:NewsService,
    private _serveceUser:UserServiceService,
    ) {
      this._serveceUser.userEntity.subscribe(x => this.user = x);
      this._serveceUser.roleEntity.subscribe(y => this.role = y);
      this._serveceUser.AvatarEntity.subscribe(x => this.urlavatar = x)
     }

     ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.item = new NewsEntity();
      this.blogService.GetNewsById(this.id).subscribe( data => {
        this.item=data;
          this.urlImage = "./../../../assets/images/" + data.image;
        console.log(this.urlImage);
      });
    }

}

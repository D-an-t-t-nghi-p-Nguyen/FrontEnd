import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vn } from 'src/app/BackEnd/WebModel/vn';
import { VnService } from 'src/app/BackEnd/WebService/vn.service';

@Component({
  selector: 'app-getid',
  templateUrl: './getid.component.html',
  styleUrls: ['./getid.component.scss']
})
export class GetidComponent implements OnInit {

  id:number;
  item:Vn;

  urlImage:string;
  constructor(private route:ActivatedRoute,
    private blogService:VnService) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.item = new Vn();
    this.blogService.GetBlogById(this.id).subscribe( data => {
      this.item=data;
        this.urlImage = "./../../../assets/images/" + data.image;
      console.log(this.urlImage);
    });
  }

}

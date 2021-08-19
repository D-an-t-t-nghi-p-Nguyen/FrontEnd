import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsEntity } from 'src/app/BackEnd/NewsMdoel/news-entity';
import { NewsService } from 'src/app/BackEnd/NewsService/news.service';

@Component({
  selector: 'app-get-id-news',
  templateUrl: './get-id-news.component.html',
  styleUrls: ['./get-id-news.component.scss']
})
export class GetIdNewsComponent implements OnInit {

  id:number;
  item:NewsEntity;

  urlImage:string;
  constructor(private route:ActivatedRoute,
    private blogService:NewsService) { }
  
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

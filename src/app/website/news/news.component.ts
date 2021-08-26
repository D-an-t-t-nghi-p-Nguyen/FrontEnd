import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsEntity } from 'src/app/BackEnd/NewsMdoel/news-entity';
import { NewsService } from 'src/app/BackEnd/NewsService/news.service';
import { Vn } from 'src/app/BackEnd/WebModel/vn';
import { VnService } from 'src/app/BackEnd/WebService/vn.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  news:NewsEntity[];
  vn:Vn[];
  totalRecords:string;
  page: number= 1;
  public sliders: Array<any> = [];
  constructor(
    private vnService:VnService,
    private newsService:NewsService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.newsService.GetNews().subscribe(data =>{
      this.news=data;
    });
    this.vnService.GetBlog().subscribe(data=>{
      this.vn=data;
    })
  }

  ViewBlogVn(id:number){
    this.router.navigate(['viewid',id])
  }
  ViewNews(id:number){
    this.router.navigate(['newsid',id])
  }

}

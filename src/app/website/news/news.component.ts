import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsEntity } from 'src/app/BackEnd/NewsMdoel/news-entity';
import { NewsService } from 'src/app/BackEnd/NewsService/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  news:NewsEntity[];

  constructor(
    private newsService:NewsService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.newsService.GetNews().subscribe(data =>{
      this.news=data;
    });
  }

  ViewNews(id:number){
    this.router.navigate(['newsid',id])
  }

}

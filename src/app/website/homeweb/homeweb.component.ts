import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsEntity } from 'src/app/BackEnd/NewsMdoel/news-entity';
import { NewsService } from 'src/app/BackEnd/NewsService/news.service';
import { Vn } from 'src/app/BackEnd/WebModel/vn';
import { VnService } from 'src/app/BackEnd/WebService/vn.service';

@Component({
  selector: 'app-homeweb',
  templateUrl: './homeweb.component.html',
  styleUrls: ['./homeweb.component.scss']
})
export class HomewebComponent implements OnInit {

  vn:Vn[];
  news:NewsEntity[];
  totalRecords:string;
  page: number= 1;
  public sliders: Array<any> = [];
  constructor(
    private vnservice:VnService,
    private newsService:NewsService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.vnservice.GetBlog().subscribe(data =>{
      this.vn=data;
    });
    this.newsService.GetNews().subscribe(data =>{
      this.news=data;
    })
  }

  ViewBlogVn(id:number){
    this.router.navigate(['viewid',id])
  }
  viewNews(id:number){
    this.router.navigate(['newsid',id])
  }

}

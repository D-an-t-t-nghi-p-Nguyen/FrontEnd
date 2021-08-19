import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { NewsEntity } from 'src/app/BackEnd/NewsMdoel/news-entity';
import { NewsService } from 'src/app/BackEnd/NewsService/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  news:NewsEntity[];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(
    private newsService:NewsService,
    private router:Router
  ) { }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.newsService.GetNews().subscribe(data =>{
      this.news=data;
      this.dtTrigger.next();
    });
  }

  UpdateBlog(id:number){
    this.router.navigate(['admin/updatenews',id])
  }

  ViewBlog(id:number){
    this.router.navigate(['admin/getidnews',id])
  }

  deleteBlog(id:number){
    this.newsService.DeleteNews(id).subscribe(data=>{
      this.newsService.GetNews().subscribe(data=>{
        this.news=data.sort((a,b) => b.id - a.id);
        console.log(data);
      })
    })
  }

}

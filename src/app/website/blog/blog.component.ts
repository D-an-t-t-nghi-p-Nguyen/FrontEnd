import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vn } from 'src/app/BackEnd/WebModel/vn';
import { VnService } from 'src/app/BackEnd/WebService/vn.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  vn:Vn[]
  totalRecords:string;
  page: number=1;
  constructor(
    private vnService:VnService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.vnService.GetBlog().subscribe(data => {
      this.vn=data;
    });
  }

  ViewBlogVn(id:number){
    this.router.navigate(['viewid',id])
  }


}

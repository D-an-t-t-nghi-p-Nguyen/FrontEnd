import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vn } from 'src/app/BackEnd/WebModel/vn';
import { VnService } from 'src/app/BackEnd/WebService/vn.service';

@Component({
  selector: 'app-homeweb',
  templateUrl: './homeweb.component.html',
  styleUrls: ['./homeweb.component.scss']
})
export class HomewebComponent implements OnInit {

  vn:Vn[];
  totalRecords:string;
  page: number= 1;
  public sliders: Array<any> = [];
  constructor(
    private vnservice:VnService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.vnservice.GetBlog().subscribe(data =>{
      this.vn=data;
    });
  }

  ViewBlogVn(id:number){
    this.router.navigate(['viewid',id])
  }

}

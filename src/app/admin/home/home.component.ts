import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Vn } from '../../BackEnd/WebModel/vn';
import { VnService } from '../../BackEnd/WebService/vn.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  vn:Vn[];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  constructor(
    private vnService:VnService,
    private router:Router,
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
    this.vnService.GetBlog().subscribe(data =>{
      this.vn=data;
      this.dtTrigger.next();
    });
  }

  UpdateBlog(id:number){
    this.router.navigate(['admin/update',id])
  }

  ViewBlog(id:number){
    this.router.navigate(['admin/getid',id])
  }

  deleteBlog(id:number){
    this.vnService.DeleteBlog(id).subscribe(data=>{
      this.vnService.GetBlog().subscribe(data=>{
        this.vn=data.sort((a,b) => b.id - a.id);
        console.log(data);
      })
    })
  }


}

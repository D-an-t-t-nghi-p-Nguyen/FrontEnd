import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Oder } from 'src/app/BackEnd/WebModel/oder';
import { OderRequest } from 'src/app/BackEnd/WebModel/oder-request';
import { VnService } from 'src/app/BackEnd/WebService/vn.service';

@Component({
  selector: 'app-oder',
  templateUrl: './oder.component.html',
  styleUrls: ['./oder.component.scss']
})
export class OderComponent implements OnInit {

  oder:OderRequest[];
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
    this.vnService.GetOder().subscribe(data =>{
      this.oder=data;
      this.dtTrigger.next();
    });
  }

  BuyOder(id:number){
    this.vnService.BuyOder(id).subscribe(data=>{
      this.vnService.GetOder().subscribe(data=>{
        this.oder=data.sort((a,b) => b.id - a.id);
        console.log(data);
      })
    })
  }

}

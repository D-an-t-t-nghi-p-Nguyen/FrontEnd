import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { OderRequest } from 'src/app/BackEnd/WebModel/oder-request';
import { VnService } from 'src/app/BackEnd/WebService/vn.service';

@Component({
  selector: 'app-buyoder',
  templateUrl: './buyoder.component.html',
  styleUrls: ['./buyoder.component.scss']
})
export class BuyoderComponent implements OnInit {

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
    this.vnService.GetOderBuy().subscribe(data =>{
      this.oder=data;
      this.dtTrigger.next();
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Talk } from 'src/app/BackEnd/TalkModel/talk';
import { TalkService } from 'src/app/BackEnd/TalkService/talk.service';

@Component({
  selector: 'app-talk',
  templateUrl: './talk.component.html',
  styleUrls: ['./talk.component.scss']
})
export class TalkComponent implements OnInit {

  talk:Talk[];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  constructor(
    private  talkService: TalkService,
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
    this.GetTalk();
  }

  private GetTalk(){
    this.talkService.GetAllTalk().subscribe(data =>{
      this.talk=data;
      this.dtTrigger.next();
    })
  }

  deleteEmployee(id: number){
    this.talkService.DeleteTalk(id).subscribe( data => {
      console.log(data);
      this.GetTalk();
    })
  }

}

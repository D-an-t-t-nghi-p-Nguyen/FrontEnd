import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Talk } from 'src/app/BackEnd/TalkModel/talk';
import { TalkService } from 'src/app/BackEnd/TalkService/talk.service';

@Component({
  selector: 'app-talk',
  templateUrl: './talk.component.html',
  styleUrls: ['./talk.component.scss']
})
export class TalkComponent implements OnInit {

  talk:Talk[];
  constructor(
    private  talkService: TalkService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.GetTalk();
  }

  private GetTalk(){
    this.talkService.GetAllTalk().subscribe(data =>{
      this.talk=data;
    })
  }

  deleteEmployee(id: number){
    this.talkService.DeleteTalk(id).subscribe( data => {
      console.log(data);
      this.GetTalk();
    })
  }

}

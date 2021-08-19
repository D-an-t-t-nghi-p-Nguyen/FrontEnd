import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Talk } from 'src/app/BackEnd/TalkModel/talk';
import { TalkService } from 'src/app/BackEnd/TalkService/talk.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  talk:Talk = new Talk();
  talks:Talk[];

  constructor(
    private talkService:TalkService,
    private route:Router,
  ) { }

  ngOnInit(): void {
  }

  SaveTalk(){
    this.talkService.CreateTalk(this.talk).subscribe(data=>{
      console.log(data);
      this.GotoTalk();
    });
  }

  onSubmit(){``
  console.log(this.talk);
  this.SaveTalk()
}

  GotoTalk(){
    this.route.navigate(['/homeweb'])
  }

}

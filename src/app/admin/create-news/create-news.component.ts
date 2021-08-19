import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/BackEnd/NewsService/news.service';

@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.scss']
})
export class CreateNewsComponent implements OnInit {

  formNews= new FormGroup({
    name  :new FormControl(""),
    content1 :new FormControl(""),
    content2 :new FormControl(""),
    image :new FormControl(""),
    dateSubmit :new FormControl(""),
  });
  OneFile:File=null
  imageUrl = '';

  constructor(
    private newsService: NewsService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  Selected(event){
    this.OneFile=event.target.files[0];
  }

  handleFileInput(file1:FileList){
    this.OneFile = file1.item(0);
    var reader = new FileReader();
    reader.onload = (event:any) =>{
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.OneFile);
  }

  Submit(){
    this.newsService.SaveNews(this.formNews.value).subscribe(data=>{
      this.newsService.UploadFile(this.OneFile,data.id).subscribe(data=>{
        console.log(data);
      })
      this.goToUserList();
    })
  }

  goToUserList(){
    this.router.navigate(['/admin/news'])
  }

}

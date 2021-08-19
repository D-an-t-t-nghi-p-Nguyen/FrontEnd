import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from 'src/app/BackEnd/NewsService/news.service';
import { pluck } from 'rxjs/operators';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-news',
  templateUrl: './update-news.component.html',
  styleUrls: ['./update-news.component.scss']
})
export class UpdateNewsComponent implements OnInit {

  OneFile:File=null
  formNews : any;
  imageUrl:string = "";

  constructor(
    private newsService:NewsService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      pluck('id')
    ).subscribe(id =>{
      this.newsService.GetNewsById(id).subscribe(data =>{
        this.formNews = new FormGroup({
          id: new FormControl(data.id),
          name  :new FormControl(data.name),
          content2 :new FormControl(data.content2),
          content1 :new FormControl(data.content1),
          dateSubmit :new FormControl(data.dateSubmit),
          image :new FormControl(data.image)
        })
        this.imageUrl = "./../../../assets/images/"+ data.image
      })
    })
  }

  Selected(event){
    this.OneFile=event.target.files[0];
  }

  handleFileInput(file:FileList){
    this.OneFile = file.item(0);
  
    var reader = new FileReader();
    reader.onload = (event:any) =>{
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.OneFile);
  }


  Submit(){
    this.newsService.UpdateNews(this.formNews.value,this.formNews.value.id).subscribe(data=>{
      if(this.OneFile != null){
        this.newsService.UploadFile(this.OneFile,data.id).subscribe(data=>{
          console.log(data);
        })

      }
      this.goToUserList();
    })

  }
  goToUserList(){
  this.router.navigate(['/admin/news'])
  }

}

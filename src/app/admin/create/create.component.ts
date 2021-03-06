import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { VnService } from 'src/app/BackEnd/WebService/vn.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  formBlog= new FormGroup({
    name  :new FormControl(""),
    address  :new FormControl(""),
    price :new FormControl(""),
    content :new FormControl(""),
    image :new FormControl(""),
    dateSubmit :new FormControl(""),
  });
  OneFile:File=null
  imageUrl = '';

  constructor(
    private service:VnService,
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
    this.service.SaveBlog(this.formBlog.value).subscribe(data=>{
      this.service.UploadFile(this.OneFile,data.id).subscribe(data=>{
        console.log(data);
      })
      this.goToUserList();
    })
  }

  goToUserList(){
    this.router.navigate(['/admin/home'])
  }

}

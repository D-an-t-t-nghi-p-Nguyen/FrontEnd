import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewsEntity } from '../NewsMdoel/news-entity';
import { NewsRequest } from '../NewsMdoel/news-request';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private BaseURL = "http://localhost:8080/api/v1";

  constructor(private httpClient: HttpClient) { }

  GetNews(){
    return this.httpClient.get<NewsEntity[]>(`${this.BaseURL}/news`);
  }

  SaveNews(userEntity:NewsRequest){
    return this.httpClient.post<NewsRequest>(`${this.BaseURL}/news`,userEntity);
  }

  UploadFile(file: File,id){
    const formData=new FormData();
    formData.append('file',file);
    return this.httpClient.post<NewsRequest>(`${this.BaseURL}/news/upload/${id}`,formData);
  }

  GetNewsById(id:number){
    return this.httpClient.get<NewsEntity>(`${this.BaseURL}/news/${id}`);
  }

  UpdateNews(userEntity:NewsEntity,id:number){
    return this.httpClient.put<NewsEntity>(`${this.BaseURL}/news/${id}`,userEntity)
  }

  DeleteNews(id:number){
    return this.httpClient.delete<Boolean>(`${this.BaseURL}/news/${id}`)
  }
}

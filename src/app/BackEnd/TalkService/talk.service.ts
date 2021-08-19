import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Talk } from '../TalkModel/talk';

@Injectable({
  providedIn: 'root'
})
export class TalkService {

  private BaseURL = "http://localhost:8080/api/v1";

  constructor(private httpClient: HttpClient) { }

  GetAllTalk():Observable<Talk[]>{
    return this.httpClient.get<Talk[]>(`${this.BaseURL}/talk`);
  }

  CreateTalk(talk:Talk):Observable<Object>{
    return this.httpClient.post(`${this.BaseURL}/talk`,talk);
  }

  DeleteTalk(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.BaseURL}/talk/${id}`);
  }
  
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Blog } from '../Models/blogModels';
import { ApiBaseService } from './api-base.service';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  private UsersControllerUrl=this.baseSvc.GetBaseUrl();
  constructor(private http:HttpClient, private baseSvc: ApiBaseService)
   {
   }

  GetPosts() : Observable<Blog[]>
  {
    var apiUrPosts=this.UsersControllerUrl + 'posts';
    return this.http.get<Blog[]>(apiUrPosts);
  }

}

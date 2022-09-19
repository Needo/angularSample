import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user-module/userModels';
import { ApiBaseService } from './api-base.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private UsersControllerUrl=this.baseSvc.GetBaseUrl();
  constructor(private http:HttpClient, private baseSvc: ApiBaseService)
   {
   }

  GetUsers() : Observable<User[]>
  {
    var apiUrlUsers=this.UsersControllerUrl + 'users';
    return this.http.get<User[]>(apiUrlUsers);
  }
}

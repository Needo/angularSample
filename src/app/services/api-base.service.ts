import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MenuItem } from '../Models/nav-models';

@Injectable({
  providedIn: 'root'
})
export class ApiBaseService {
private baseUrl:string="";
MenuItems : MenuItem [] =[
  {Label:"Home",icon:"widgets",routerLink:"home"},  
  {Label:"Users", icon:"supervisor_account",routerLink:"users"},
  {Label:"Blogs",icon:"rss_feed",routerLink:"blogs"},
  {Label:"Test 1",icon:"widgets",routerLink:""},
  {Label:"Test 2",icon:"widgets",routerLink:""}
];

  constructor() { 
    this.baseUrl=environment.baseUrl;
  }

  GetBaseUrl(){
    return this.baseUrl;
  }
  public GetMenuItemImage(itemName:string):MenuItem
  {
    return this.MenuItems.find(item=>item.Label==itemName);
  }

}

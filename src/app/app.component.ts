import { Component } from '@angular/core';
import { MenuItem } from './Models/nav-models';
import { FormBuilder } from '@angular/forms';
import { ApiBaseService } from './services/api-base.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private baseSvc:ApiBaseService) {
    this.MenuItems=baseSvc.MenuItems;
  }
  public activeRouteId: number;

public activeRouteClick(index: number): void {
  this.activeRouteId = index;
}
  MenuItems : MenuItem [] =[
    {Label:"Home",icon:"widgets",routerLink:"home"},
    { Label:"Home 1", icon:"home"  ,routerLink:"home"},
    {Label:"Users", icon:"supervisor_account",routerLink:"users"},
    {Label:"Blogs",icon:"rss_feed",routerLink:"blogs"},
    {Label:"Test 1",icon:"widgets",routerLink:"home"},
    {Label:"Test 2",icon:"widgets",routerLink:"home"}
  ];
  
  title = 'fs-assignment';
  public isMenuOpen: boolean = true;
  public onSidenavClick(): void {
    this.isMenuOpen = true;
  }

  
}

import { Component, OnInit,ViewChild, ElementRef, Input } from '@angular/core';
import { MenuItem } from 'src/app/Models/nav-models';
import { ApiBaseService } from 'src/app/services/api-base.service';
import { UsersService } from 'src/app/services/users.service';
import { User } from '../userModels';
declare var $: any;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {
  @ViewChild('listGrid', { static: false }) listGrid: ElementRef;
  activeGridIcon: object = { 'background-color': '#18bc9c' };
  activeListIcon: object = { 'background-color': '#212529' }; 
  title: string = "Title sample";  
  allUsers: User []=[];  
  SelectedMenuItem: MenuItem;

  constructor(private userSvc:UsersService, private baseSvc:ApiBaseService)
  {
   this.SelectedMenuItem=baseSvc.GetMenuItemImage("Users");
    userSvc.GetUsers().subscribe(users=>this.allUsers=users),err => {console.log(err)};  
  }

  ngOnInit(): void {   

  }

  listView($event) {
    $event.preventDefault();
    $('#products .item').addClass('list-group-item');
  }
  gridView($event) {    
    $event.preventDefault();
    $('#products .item').removeClass('list-group-item');
    $('#products .item').addClass('grid-group-item');   
  }

}
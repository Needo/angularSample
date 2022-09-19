import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/Models/nav-models';
import { ApiBaseService } from 'src/app/services/api-base.service';
import { AppSummry, SummryItem } from '../summaryModels';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  SelectedMenuItem: MenuItem;
  SummaryItems:SummryItem [] =[];
  constructor(private baseSvc:ApiBaseService)
  {

    this.SelectedMenuItem=baseSvc.GetMenuItemImage("Home");   

    //TODO: should be from server end.
   this.SummaryItems=[
    { Total:345, Caption:"Total Orders",Icon:"shopping_cart" },
    { Total:267, Caption:"Total Expenses",Icon:"account_balance_wallet" },
    { Total:345, Caption:"Total Revenue",Icon:"assessment" },
    { Total:345, Caption:"New Users",Icon:"account_circle" }  ];
    
  
  }
  

  ngOnInit(): void {
  }

}

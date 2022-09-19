import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
//import { MatListModule } from '@angular/material/list/list-module';
//import { MatGridListModule } from '@angular/material/grid-list';

const uiModules = [
  MatSidenavModule,
  MatIconModule,
  MatButtonModule,
 // MatListModule,  
  //MatGridListModule
];
@NgModule({
  imports: uiModules,
  exports: uiModules
})
export class AppUiModule { }


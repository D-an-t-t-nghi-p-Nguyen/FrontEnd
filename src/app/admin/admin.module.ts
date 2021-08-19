import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from '../admin/admin.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { GetidComponent } from './getid/getid.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { UserListComponent } from './user-list/user-list.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { OderComponent } from './oder/oder.component';
import { BuyoderComponent } from './buyoder/buyoder.component';
import { TalkComponent } from './talk/talk.component';
import { NewsComponent } from './news/news.component';


@NgModule({
  declarations: [
    AdminComponent, 
    HeaderComponent,
    SidenavComponent, 
    HomeComponent, 
    DashboardComponent, 
    CreateComponent, 
    UpdateComponent, 
    GetidComponent, 
    UserListComponent, 
    UserUpdateComponent, 
    UserDetailsComponent, OderComponent, BuyoderComponent, TalkComponent, NewsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    // * MATERIAL IMPORTS
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    MDBBootstrapModule.forRoot(),
  ],
  exports:[
    AdminComponent
  ]
})
export class AdminModule { }

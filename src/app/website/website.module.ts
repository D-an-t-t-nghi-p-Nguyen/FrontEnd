import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { WebsiteComponent } from './website.component';
import { HeaderComponent } from './header/header.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HomewebComponent } from './homeweb/homeweb.component';
import { ContactComponent } from './contact/contact.component';
import { ViewidComponent } from './viewid/viewid.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    WebsiteComponent, 
    HeaderComponent, 
    HomewebComponent, 
    ContactComponent, 
    ViewidComponent,
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    MDBBootstrapModule.forRoot(),
    NgxPaginationModule,
    IvyCarouselModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    WebsiteComponent,
  ]
})
export class WebsiteModule { }

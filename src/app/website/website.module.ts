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
import { BlogComponent } from './blog/blog.component';
import { BrowserModule } from '@angular/platform-browser';
import { NewsComponent } from './news/news.component';
import { NewsidComponent } from './newsid/newsid.component';
import { ModalModule, WavesModule, InputsModule, ButtonsModule } from 'angular-bootstrap-md';
import { ViewUserComponent } from './view-user/view-user.component'



@NgModule({
  declarations: [
    WebsiteComponent, 
    HeaderComponent, 
    HomewebComponent, 
    ContactComponent, 
    ViewidComponent, 
    BlogComponent, 
    NewsComponent, 
    NewsidComponent, ViewUserComponent,
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    MDBBootstrapModule.forRoot(),
    NgxPaginationModule,
    IvyCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    ModalModule,
    WavesModule,
    InputsModule,
    ButtonsModule
  ],
  exports:[
    WebsiteComponent,
  ]
})
export class WebsiteModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomewebComponent } from './homeweb/homeweb.component';
import { ViewidComponent } from './viewid/viewid.component';
import { WebsiteComponent } from './website.component';

const routes: Routes = [
  {
    path:'',
    component:WebsiteComponent,
    children:[
      {path: '',redirectTo:'homeweb',pathMatch: 'full'},
      {path:'homeweb',component:HomewebComponent},
      {path:'contact',component:ContactComponent},
      {path:'viewid/:id',component:ViewidComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }

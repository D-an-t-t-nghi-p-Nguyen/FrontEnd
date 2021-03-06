import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { BuyoderComponent } from './buyoder/buyoder.component';
import { CreateNewsComponent } from './create-news/create-news.component';
import { CreateComponent } from './create/create.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GetIdNewsComponent } from './get-id-news/get-id-news.component';
import { GetidComponent } from './getid/getid.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { OderComponent } from './oder/oder.component';
import { TalkComponent } from './talk/talk.component';
import { UpdateNewsComponent } from './update-news/update-news.component';
import { UpdateComponent } from './update/update.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserUpdateComponent } from './user-update/user-update.component';

const routes: Routes = [  
{
  path: 'admin',
  component:AdminComponent,
  children:[
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'createwebsite', component: CreateComponent},
    { path: 'update/:id', component:UpdateComponent},
    { path: 'getid/:id', component:GetidComponent},
    { path: 'userlist', component:UserListComponent},
    { path: 'userdetails/:id',  component:UserDetailsComponent},
    { path: 'userupdate/:id', component:UserUpdateComponent},
    { path: 'oderadmin', component:OderComponent},
    { path: 'oderbuy' ,component:BuyoderComponent},
    { path: 'talk', component:TalkComponent},
    { path: 'news', component:NewsComponent},
    { path: 'updatenews/:id', component:UpdateNewsComponent},
    { path: 'createnews', component:CreateNewsComponent},
    { path: 'getidnews/:id',  component:GetIdNewsComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CreateComponent } from './create/create.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GetidComponent } from './getid/getid.component';
import { HomeComponent } from './home/home.component';
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
    { path: 'userupdate/:id', component:UserUpdateComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { SubscribersComponent } from './subscribers/subscribers.component';
import { MastersComponent } from './masters/masters.component';
import { AddprofileComponent } from './addprofile/addprofile.component';
import { UsersComponent } from './users/users.component';
import { AdmindetailsComponent } from './admindetails/admindetails.component';
import { MastersdetailsComponent } from './mastersdetails/mastersdetails.component';
import { SubscribersdetailsComponent } from './subscribersdetails/subscribersdetails.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MasterregComponent } from './masterreg/masterreg.component';
import { EditskillComponent } from './editskill/editskill.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'homepage', component: HomepageComponent},
  {path: 'users', component: UsersComponent },
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'admin', component: UsersComponent},
  {path: 'masters', component: MastersComponent},
  {path: 'subscribers', component: SubscribersComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'addprofile', component: AddprofileComponent},
  {path: 'masterdetails', component: MastersdetailsComponent},
  {path: 'subscriberdetails', component: SubscribersdetailsComponent},
  {path: 'admindetails', component: AdmindetailsComponent},
  {path: 'masterreg', component: MasterregComponent},
  {path: 'editskill', component: EditskillComponent},
  {path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './routes/login/login.component';
import { HomeComponent } from './routes/home/home.component';
import { SkillsComponent } from './routes/skills/skills.component';
import { SubscribersComponent } from './routes/subscribers/subscribers.component';
import { MastersComponent } from './routes/masters/masters.component';
import { AddprofileComponent } from './routes/addprofile/addprofile.component';
import { UsersComponent } from './routes/users/users.component';
import { AdmindetailsComponent } from './routes/admindetails/admindetails.component';
import { MastersdetailsComponent } from './routes/mastersdetails/mastersdetails.component';
import { SubscribersdetailsComponent } from './routes/subscribersdetails/subscribersdetails.component';
import { RegistrationComponent } from './routes/registration/registration.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: UsersComponent },
  { path: 'masters', component: MastersComponent },
  { path: 'subscribers', component: SubscribersComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'addprofile', component: AddprofileComponent },
  { path: 'masterdetails', component: MastersdetailsComponent },
  { path: 'subscriberdetails', component: SubscribersdetailsComponent },
  { path: 'admindetails', component: AdmindetailsComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

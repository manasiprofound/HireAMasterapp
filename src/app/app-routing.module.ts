import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './routes/login/login.component';
import { HomeComponent } from './routes/home/home.component';
import { HomepageComponent } from './routes/homepage/homepage.component';
import { SkillsComponent } from './routes/skills/skills.component';
import { SubscribersComponent } from './routes/subscribers/subscribers.component';
import { MastersComponent } from './routes/masters/masters.component';
import { AddprofileComponent } from './routes/addprofile/addprofile.component';
import { UsersComponent } from './routes/users/users.component';
import { AdmindetailsComponent } from './routes/admindetails/admindetails.component';
import { MastersdetailsComponent } from './routes/mastersdetails/mastersdetails.component';
import { SubscribersdetailsComponent } from './routes/subscribersdetails/subscribersdetails.component';
import { RegistrationComponent } from './routes/registration/registration.component';
import { HomepageComponent } from './routes/homepage/homepage.component';
import { AdminhomeComponent } from './routes/adminhome/adminhome.component';
import { AdminmasterComponent } from './routes/adminmaster/adminmaster.component';
import { AdminsubscriberComponent } from './routes/adminsubscriber/adminsubscriber.component';
import { AdminpaymentsComponent } from './routes/adminpayments/adminpayments.component';
import { AdminapplicantsComponent } from './routes/adminapplicants/adminapplicants.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  {path: 'homepage', component: HomepageComponent},
  { path: 'admin', component: UsersComponent },
  {path: 'adminhome', component: AdminhomeComponent},
  {path: 'adminmaster', component: AdminmasterComponent},
  {path: 'adminsubscriber', component: AdminsubscriberComponent},
  {path: 'adminpayment', component: AdminpaymentsComponent},
  {path: 'adminapplicants', component: AdminapplicantsComponent},
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

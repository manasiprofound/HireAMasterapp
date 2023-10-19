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
import { AdminhomeComponent } from './routes/adminhome/adminhome.component';
import { AdminmasterComponent } from './routes/adminmaster/adminmaster.component';
import { AdminmasterdetailsComponent } from './routes/adminmasterdetails/adminmasterdetails.component';
import { AdminsubscriberComponent } from './routes/adminsubscriber/adminsubscriber.component';
import { AdminpaymentsComponent } from './routes/adminpayments/adminpayments.component';
import { AdminapplicantsComponent } from './routes/adminapplicants/adminapplicants.component';
import { AdminpaymentsdetailsComponent } from './routes/adminpaymentsdetails/adminpaymentsdetails.component';
import { AdminapplicantdetailsComponent } from './routes/adminapplicantdetails/adminapplicantdetails.component';
import { MasterHomeComponent } from './routes/master-home/master-home.component';
import { MasterMngavaibilityComponent } from './routes/master-mngavaibility/master-mngavaibility.component';
import { MasterMngsessionsComponent } from './routes/master-mngsessions/master-mngsessions.component';
import { MasterModifyavaibilityComponent } from './routes/master-modifyavaibility/master-modifyavaibility.component';
import { HomepageComponent } from './routes/homepage/homepage.component';
import { UserloginComponent } from './routes/userlogin/userlogin.component';

const routes: Routes = [
  { path: '', redirectTo: 'addadmin', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'login', component: LoginComponent },
  { path: 'userlogin', component: UserloginComponent },
  {path: 'homepage', component: HomepageComponent},
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: UsersComponent },
  { path: 'adminhome', component: AdminhomeComponent},
  { path: 'adminmaster', component: AdminmasterComponent},
  { path: 'adminmasterdetails', component: AdminmasterdetailsComponent},
  { path: 'adminsubscriber', component: AdminsubscriberComponent},
  { path: 'adminpayment', component: AdminpaymentsComponent},
  { path: 'adminpaymentdetails', component: AdminpaymentsdetailsComponent},
  { path: 'adminapplicants', component: AdminapplicantsComponent},
  { path: 'adminapplicantdetails', component: AdminapplicantdetailsComponent},
  { path: 'masters', component: MastersComponent },
  { path: 'subscribers', component: SubscribersComponent },
  { path: 'skills', component: SkillsComponent },
  {path: 'registration', component: RegistrationComponent},
  { path: 'addadmin', component: AddprofileComponent },
  { path: 'masterdetails', component: MastersdetailsComponent },
  { path: 'subscriberdetails', component: SubscribersdetailsComponent },
  { path: 'admindetails', component: AdmindetailsComponent },
  { path: 'masterhome', component: MasterHomeComponent },
  { path: 'mastermngavaibility', component: MasterMngavaibilityComponent },
  { path: 'mastermngsessions', component: MasterMngsessionsComponent },
  { path: 'modifymasteracaibility', component: MasterModifyavaibilityComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

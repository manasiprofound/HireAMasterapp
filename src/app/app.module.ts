import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { MenuComponent } from './Components/menu/menu.component';
import { AddprofileComponent } from './routes/addprofile/addprofile.component';
import { AdmindetailsComponent } from './routes/admindetails/admindetails.component';
import { LoginComponent } from './routes/login/login.component';
import { MastersComponent } from './routes/masters/masters.component';
import { HomeComponent } from './routes/home/home.component';
import { MastersdetailsComponent } from './routes/mastersdetails/mastersdetails.component';
import { SkillsComponent } from './routes/skills/skills.component';
import { SubscribersComponent } from './routes/subscribers/subscribers.component';
import { SubscribersdetailsComponent } from './routes/subscribersdetails/subscribersdetails.component';
import { UsersComponent } from './routes/users/users.component';
import { FormsModule } from '@angular/forms';
import { EditskillComponent } from './routes/editskill/editskill.component';
import { DataTablesModule } from 'angular-datatables';
import { RegistrationComponent } from './routes/registration/registration.component';
import { RegistrationVerificationComponent } from './routes/registration-verification/registration-verification.component';
import { RegistrationCompleteComponent } from './routes/registration-complete/registration-complete.component';
import { RegistrationProfileComponent } from "./routes/registration-profile/registration-profile.component";
import { RegistrationPersonalComponent } from './routes/registration-personal/registration-personal.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgxEditorModule } from 'ngx-editor';
import { AdminmenuComponent } from './Components/adminmenu/adminmenu.component';
import { AdminhomeComponent } from './routes/adminhome/adminhome.component';
import { AdminsubscriberComponent } from './routes/adminsubscriber/adminsubscriber.component';
import { AdminpaymentsComponent } from './routes/adminpayments/adminpayments.component';
import { AdminapplicantsComponent } from './routes/adminapplicants/adminapplicants.component';
import { AdminpaymentsdetailsComponent } from './routes/adminpaymentsdetails/adminpaymentsdetails.component';
import { AdminmasterComponent } from './routes/adminmaster/adminmaster.component';
import { AdminapplicantdetailsComponent } from './routes/adminapplicantdetails/adminapplicantdetails.component';
import { AdminmasterdetailsComponent } from './routes/adminmasterdetails/adminmasterdetails.component';
import { MasterMngsessionsComponent } from './routes/master-mngsessions/master-mngsessions.component';
import { MasterMngavaibilityComponent } from './routes/master-mngavaibility/master-mngavaibility.component';
import { MastermenuComponent } from './Components/mastermenu/mastermenu.component';
import { MasterHomeComponent } from './routes/master-home/master-home.component';
import { MasterUpcomsessionsComponent } from './routes/master-upcomsessions/master-upcomsessions.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    AddprofileComponent,
    AdmindetailsComponent,
    LoginComponent,
    MastersComponent,
    HomeComponent,
    MastersdetailsComponent,
    SkillsComponent,
    SubscribersComponent,
    SubscribersdetailsComponent,
    UsersComponent,
    EditskillComponent,
    RegistrationProfileComponent,
    RegistrationComponent,
    RegistrationVerificationComponent,
    RegistrationCompleteComponent,
    RegistrationPersonalComponent,
    AdminmenuComponent,
    AdminhomeComponent,
    AdminmasterComponent,
    AdminsubscriberComponent,
    AdminpaymentsComponent,
    AdminapplicantsComponent,
    AdminpaymentsdetailsComponent,
    AdminapplicantdetailsComponent,
    AdminmasterdetailsComponent,
    MasterMngsessionsComponent,
    MasterMngavaibilityComponent,
    MastermenuComponent,
    MasterHomeComponent,
    MasterUpcomsessionsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DataTablesModule,
    NgxDropzoneModule,
    NgxEditorModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

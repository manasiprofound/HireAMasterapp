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
import {RegistrationProfileComponent} from "./routes/registration-profile/registration-profile.component";
import { NgxDropzoneModule } from 'ngx-dropzone';
import { AdminmenuComponent } from './adminmenu/adminmenu.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminmasterComponent } from './adminmaster/adminmaster.component';
import { AdminsubscriberComponent } from './adminsubscriber/adminsubscriber.component';

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
    AdminmenuComponent,
    AdminhomeComponent,
    AdminmasterComponent,
    AdminsubscriberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DataTablesModule,
    NgxDropzoneModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

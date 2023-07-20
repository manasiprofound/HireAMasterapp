import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';

import { FormsModule } from '@angular/forms';
import { AddprofileComponent } from './addprofile/addprofile.component';
import { UsersComponent } from './users/users.component';
import { MastersComponent } from './masters/masters.component';
import { SubscribersComponent } from './subscribers/subscribers.component';
import { SkillsComponent } from './skills/skills.component';
import { AdmindetailsComponent } from './admindetails/admindetails.component';
import { MastersdetailsComponent } from './mastersdetails/mastersdetails.component';
import { SubscribersdetailsComponent } from './subscribersdetails/subscribersdetails.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MasterregComponent } from './masterreg/masterreg.component';
import { EditskillComponent } from './editskill/editskill.component';
import { UserloginComponent } from './userlogin/userlogin.component';

@NgModule({
  declarations: [
    
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    AddprofileComponent,
    UsersComponent,
    MastersComponent,
    SubscribersComponent,
    SkillsComponent,
    AdmindetailsComponent,
    MastersdetailsComponent,
    SubscribersdetailsComponent,
    HomepageComponent,
    MasterregComponent,
    EditskillComponent,
    UserloginComponent,
  
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // NgbModule,
    // DataTablesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

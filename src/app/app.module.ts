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
import { Masterreg1Component } from './routes/masterreg1/masterreg1.component';


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
    Masterreg1Component,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

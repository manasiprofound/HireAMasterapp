import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-addprofile',
  templateUrl: './addprofile.component.html',
  styleUrls: ['./addprofile.component.scss']
})
export class AddprofileComponent {

  AdminArray : any[] = [];
  isResultloaded = false;
  isUpdateFormActive = false;

  firstname: string ="";
  email: string="";
  username: string="";
  lastname: string="";
  mobile: Number= 0;
  password: string="";
  currentAdminID ="";
  

  constructor(private http: HttpClient )
  {
    //this.getAllAdmin();
  }

  register()
  {
  
    let bodyData = {
      "firstname": this.firstname,
      "email": this.email,
      "username": this.username,
      "lastname": this.lastname,
      "mobile": this.mobile,
      "password": this.password,
  
    };
 
    this.http.post("http://localhost:8081/api/v1/admin/save",bodyData,
    {responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Student Registered Successfully");
        //this.getAllAdmin();
        this.firstname = '';
        this.email = '';
        this.username = '';
        this.lastname = '';
        this.email = '';
        this.username = '';
        this.mobile  = 0;
    }
    
    );
  }

  // save(){}

  // register(){
  //   "firstname" :
  //   "email" :
  //   "username" :
  //   "lastname" :
  //   "mobile" :
  //   "password" :
    
  // }
 
}

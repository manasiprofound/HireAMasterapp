import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminapplicants',
  templateUrl: './adminapplicants.component.html',
  styleUrls: ['./adminapplicants.component.scss']
})
export class AdminapplicantsComponent {
  adminapplicantpage= true;
  adminapplicantdatailspage = false;
  userspage = ['adminapplicantbutton'];


  constructor(private router: Router ){}
  
  enableapplicantsdetails(userspage: string){
    console.log("insode");
    if(userspage == 'adminapplicantbutton'){
      console.log('hello');
      this.adminapplicantpage= false;
      this.adminapplicantdatailspage = true;
    }
  }
}

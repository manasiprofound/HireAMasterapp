import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminapplicants',
  templateUrl: './adminapplicants.component.html',
  styleUrls: ['./adminapplicants.component.scss']
})
export class AdminapplicantsComponent {
  adminapplicantpage= false;
  adminmasters = true;
  userspage = ['masterdetailsbutton'];


  constructor(private router: Router ){}
  
  enableapplicantsdetails(userspage: string){
    console.log("insode");
    if(userspage == 'adminapplicantpage'){
      console.log('hello');
      this.adminapplicantpage= true;
      this.adminmasters = false;
    }
  }
}

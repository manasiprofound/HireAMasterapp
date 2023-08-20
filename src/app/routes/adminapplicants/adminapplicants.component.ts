import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminapplicants',
  templateUrl: './adminapplicants.component.html',
  styleUrls: ['./adminapplicants.component.scss']
})
export class AdminapplicantsComponent {
  adminapplicants= true;
  adminapplicantdatailspage = false;
  userspage = ['adminapplicantbutton'];

  dtOptions: DataTables.Settings = {};

  constructor(private router: Router ){}
  
  ngOnInit(): void {
    this.dtOptions = {
      lengthChange: false,
      searching: false,
      language: {
        paginate: {
          next: '&#x3E;',
          previous: '&#x3C;',
          first: "",
          last: ""
        }
      }
    };
  }

  enableapplicantsdetails(){
    this.router.navigate(['adminapplicantdatailspage']);
  }  
  // enableapplicantsdetails(userspage: string){
  //   console.log("insode");
  //   if(userspage == 'adminapplicantbutton'){
  //     console.log('hello');
  //     this.adminapplicants= false;
  //     this.adminapplicantdatailspage = true;
  //   }
  // }
}

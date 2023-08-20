import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminpayments',
  templateUrl: './adminpayments.component.html',
  styleUrls: ['./adminpayments.component.scss']
})
export class AdminpaymentsComponent {
<<<<<<< HEAD
  adminpayments= true;
  adminpaymentsdatailpage = false;
  userspage = ['adminapplicantbutton'];

  constructor(private router: Router ){}
  
  enablepaymentdetails(userspage: string){
    console.log("insode");
    if(userspage == 'adminapplicantbutton'){
      console.log('hello');
      this.adminpayments= false;
      this.adminpaymentsdatailpage = true;
    }
=======
  dtOptions: DataTables.Settings = {};
  constructor( ){}

  
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
>>>>>>> development
  }
}

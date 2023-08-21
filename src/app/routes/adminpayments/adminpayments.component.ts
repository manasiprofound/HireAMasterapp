import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminpayments',
  templateUrl: './adminpayments.component.html',
  styleUrls: ['./adminpayments.component.scss']
})
export class AdminpaymentsComponent {
  dtOptions: DataTables.Settings = {};
  constructor(private router: Router) { }

  enablepaymentsdetails(){
    this.router.navigate(['adminpaymentdetails']);
  } 

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
}

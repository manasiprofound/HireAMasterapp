import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-masters',
  templateUrl: './masters.component.html',
  styleUrls: ['./masters.component.css']
})
export class MastersComponent {
  mastersdetailspage = false;
  masters = true;
  userspage = ['masterdetailsbutton'];
  dtOptions: DataTables.Settings = {};

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.dtOptions = {
      lengthChange: false,
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

  enablemastersdetails(userspage: string) {
    console.log("insode");
    if (userspage == 'masterdetailsbutton') {
      console.log('hello');
      this.mastersdetailspage = true;
      this.masters = false;
    }
  }
}

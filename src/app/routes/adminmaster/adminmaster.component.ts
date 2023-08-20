import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminmaster',
  templateUrl: './adminmaster.component.html',
  styleUrls: ['./adminmaster.component.scss']
})
export class AdminmasterComponent {
  adminmasters = true;
  masterdetailspage = false;
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

  enableaddadmin(userspage: string) {
    if (userspage === 'masterdetailspage') {
      this.masterdetailspage = true;
      this.adminmasters = false;
    }
  }
}

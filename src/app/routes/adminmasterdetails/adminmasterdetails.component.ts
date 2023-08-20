import { Component } from '@angular/core';

@Component({
  selector: 'app-adminmasterdetails',
  templateUrl: './adminmasterdetails.component.html',
  styleUrls: ['./adminmasterdetails.component.scss']
})
export class AdminmasterdetailsComponent {
  adminmasterdetails = true;
  dtOptions: DataTables.Settings = {};

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

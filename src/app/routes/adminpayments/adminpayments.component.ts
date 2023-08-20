import { Component } from '@angular/core';

@Component({
  selector: 'app-adminpayments',
  templateUrl: './adminpayments.component.html',
  styleUrls: ['./adminpayments.component.scss']
})
export class AdminpaymentsComponent {
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
  }
}

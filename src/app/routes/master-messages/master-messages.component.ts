import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-master-messages',
  templateUrl: './master-messages.component.html',
  styleUrls: ['./master-messages.component.scss']
})
export class MasterMessagesComponent {
  mastermessages = true;
  dtOptions: DataTables.Settings = {};
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.dtOptions = {
      lengthChange: false,
      searching: false,
      ordering: false,
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

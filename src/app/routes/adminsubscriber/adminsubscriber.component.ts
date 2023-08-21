import { Component } from '@angular/core';

@Component({
  selector: 'app-adminsubscriber',
  templateUrl: './adminsubscriber.component.html',
  styleUrls: ['./adminsubscriber.component.scss']
})
export class AdminsubscriberComponent {
  dtOptions: DataTables.Settings = {};
  constructor() { }

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
}

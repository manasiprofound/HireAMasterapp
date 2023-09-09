import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { NgbDateStruct, NgbCalendar, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-master-upcomsessions',
  templateUrl: './master-upcomsessions.component.html',
  styleUrls: ['./master-upcomsessions.component.scss']
})
export class MasterUpcomsessionsComponent {
  model: NgbDateStruct | undefined;
  d: Date = new Date();
  date: { year: number; month: number } = {year: this.d.getFullYear(), month: this.d.getMonth()};
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
}

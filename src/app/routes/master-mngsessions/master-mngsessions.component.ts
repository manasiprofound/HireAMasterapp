import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-master-mngsessions',
  templateUrl: './master-mngsessions.component.html',
  styleUrls: ['./master-mngsessions.component.scss']
})
export class MasterMngsessionsComponent {
  showCreateSessions: boolean = true;
  showScheduledSessions: boolean = false;
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

  handleTabChange(selectedTab: number) {
    switch (selectedTab) {
      case 1:
        this.showCreateSessions = true;
        this.showScheduledSessions = false;
        break;
      case 2:
        this.showScheduledSessions = true;
        this.showCreateSessions = false;
        break;
      default:
        this.showScheduledSessions = false;
        this.showCreateSessions = true;
    }
  }
}

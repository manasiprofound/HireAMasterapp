import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-master-mngavaibility',
  templateUrl: './master-mngavaibility.component.html',
  styleUrls: ['./master-mngavaibility.component.scss']
})
export class MasterMngavaibilityComponent {
  mastermngavaibility = true;
  dtOptions: DataTables.Settings = {};
  constructor(private router: Router) { }


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

  enablemodifymasteracaibility(){
    this.router.navigate(['modifymasteracaibility']);
  }
}

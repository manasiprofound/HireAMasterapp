import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.scss']
})

export class SubscribersComponent {
  dtOptions: DataTables.Settings = {};
  constructor(private router: Router) { }
  // gotoaddsubsprofile(){
  //   this.router.navigate(['addprofile']);
  // }

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

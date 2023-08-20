import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent {
  admindetailspage = false;
  addprofilepage = false;
  users = true;
  userspage = ['addadminbutton'];
  currentadmin = { "name": "ratnakarj", "noofseesions": "30" };
  admin = ['']
  dtOptions: DataTables.Settings = {};

  constructor(private router: Router,) { }

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

  gotoadmindetailsprofile() {
    this.router.navigate(['admindetails']);
  }

  // enableaddadmin(userspage: string){
  //   this.router.navigate(['addprofile']);
  // }
  enableaddadmin(userspage: string) {
    if (userspage == 'addadminbutton') {
      this.addprofilepage = true;
      this.users = false;
      this.admindetailspage = false;
    } else if (userspage == 'admindetailspage') {
      this.admindetailspage = true;
      this.addprofilepage = false;
      this.users = false;
    }
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminmenu',
  templateUrl: './adminmenu.component.html',
  styleUrls: ['./adminmenu.component.scss']
})
export class AdminmenuComponent {
  show = true;
  show1 = true;
  adminmasters = false;
  adminsubscribers = false;
  adminpayments = false;
  adminapplicants = false;
  menu = "admin";

  constructor(private router: Router) { }

  ngOnInit(): void { }

  gotomastertable() {
    this.router.navigate(['adminmasters']);
  }
  gotosubtable() {
    this.router.navigate(['adminsubscribers']);
  }
  gotoapplicantstable() {
    this.router.navigate(['adminapplicants']);
  }
  gotopaymenttable() {
    this.router.navigate(['adminpayments']);
  }


  enableMenu(menu: string) {
    console.log("hello  in enable menu");
    if (menu == "adminmasters") {
      this.adminmasters = true;
      this.adminsubscribers = false;
      this.adminapplicants = false;
      this.adminpayments = false;
    } else if (menu == "adminsubscribers") {
      this.adminsubscribers = true;
      this.adminmasters = false;
      this.adminpayments = false;
      this.adminapplicants = false;
    } else if (menu == "adminapplicants") {
      this.adminapplicants = true;
      this.adminsubscribers = false;
      this.adminmasters = false;
      this.adminpayments = false;
    } else if (menu == "adminpayments") {
      this.adminapplicants = false;
      this.adminsubscribers = false;
      this.adminmasters = false;
      this.adminpayments = true;
    }
  }
}

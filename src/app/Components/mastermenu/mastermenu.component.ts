import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mastermenu',
  templateUrl: './mastermenu.component.html',
  styleUrls: ['./mastermenu.component.scss']
})
export class MastermenuComponent {

  show = true;
  show1 = true;
  mastermngavaibility = false;
  mastermngsessions = true;
  masteruplsessions = false;
  menu = "master";

  constructor(private router: Router) { }

  ngOnInit(): void {}

  // gotomastertable() {
  //   this.router.navigate(['adminmasters']);
  // }
  // gotosubtable() {
  //   this.router.navigate(['adminsubscribers']);
  // }
  // gotoapplicantstable() {
  //   this.router.navigate(['adminapplicants']);
  // }
  // gotopaymenttable() {
  //   this.router.navigate(['adminpayments']);
  // }


  enablemasterMenu(menu: string) {
    console.log("hello  in enable menu");
    if (menu == "adminmasters") {
      this.mastermngavaibility = true;
      this.mastermngsessions = false;
      this.masteruplsessions = false;
    } else if (menu == "adminsubscribers") {
      this.mastermngsessions = true;
      this.mastermngavaibility = false;
      this.masteruplsessions = false;
    }else if (menu == "adminsubscribers") {
      this.mastermngsessions = true;
      this.mastermngavaibility = false;
      this.masteruplsessions = true;
    }
  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  show = true;
  show1 = true;
  admin = false;
  masters = false;
  skills = false;
  subscribers = false;
  menu = "admin";

  constructor(private router: Router) { }

  ngOnInit(): void {}

  gotouserstable() {
    this.show = !this.show;
  }
  gotomastertable() {
    this.router.navigate(['masters']);
  }
  gotosubtable() {
    this.router.navigate(['subscribers']);
  }
  gotoskillstable() {
    this.router.navigate(['skills']);
  }


  enableMenu(menu: string) {
    console.log("hello  in enable menu");
    if (menu == "admin") {
      this.admin = true;
      this.masters = false;
      this.subscribers = false;
      this.skills = false;
    } else if (menu == "masters") {
      this.masters = true;
      this.admin = false;
      this.subscribers = false;
      this.skills = false;
    } else if (menu == "subscribers") {
      this.subscribers = true;
      this.masters = false;
      this.admin = false;
      this.skills = false;
    } else if (menu == "skills") {
      this.skills = true;
      this.subscribers = false;
      this.masters = false;
      this.admin = false;
    }
  }
}
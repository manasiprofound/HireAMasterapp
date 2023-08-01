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
  admin = true;
  adminmaster = false;
  adminsubscribers = false;
  menu = "admin";
  
  constructor(private router: Router){}

  ngOnInit(): void{}

  gotouserstable(){
    this.show = !this.show;
  }
  gotomastertable(){
    this.router.navigate(['adminmaster']);
  }
  gotosubtable(){
    this.router.navigate(['subscribers']);
  }

  enableMenu(menu: string){
    console.log("hello  in enable menu");
    if(menu == "admin"){
      this.admin = true;
      this.adminmaster = false;
      this.adminsubscribers = false;
    }else if(menu == "masters"){
      this.adminmaster = true;
      this.admin = false;
      this.adminsubscribers = false;
    }
  }

}

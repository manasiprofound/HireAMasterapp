import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent {
  admindetailspage = false;
  addprofilepage = false;
  users = true;
  userspage = ['addadminbutton'];
  currentadmin = {"name":"ratnakarj","noofseesions":"30"}; 
  admin = ['']

  
  constructor(private router: Router, ){}

  gotoadmindetailsprofile(){
    this.router.navigate(['admindetails']);
  }  

  // enableaddadmin(userspage: string){
  //   this.router.navigate(['addprofile']);
  // }
  enableaddadmin(userspage: string){
    console.log("insode");
    if(userspage == 'addadminbutton'){
      console.log('hello');
      this.addprofilepage = true;
      this.users = false;
      this.admindetailspage = false;
    }else if(userspage == 'admindetailspage'){
      this.admindetailspage = true;
      this.addprofilepage = false;
      this.users = false;
    }
  }
}
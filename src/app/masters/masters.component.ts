import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-masters',
  templateUrl: './masters.component.html',
  styleUrls: ['./masters.component.css']
})
export class MastersComponent {
  mastersdetailspage= false;
  masters = true;
  userspage = ['masterdetailsbutton'];


  constructor(private router: Router ){}
  
  enablemastersdetails(userspage: string){
    console.log("insode");
    if(userspage == 'masterdetailsbutton'){
      console.log('hello');
      this.mastersdetailspage= true;
      this.masters = false;
    }
  }
}

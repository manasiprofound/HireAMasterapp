import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addprofile',
  templateUrl: './addprofile.component.html',
  styleUrls: ['./addprofile.component.scss']
})
export class AddprofileComponent {

  constructor ( private router:Router){}

save(){
  this.router.navigate(['home'])
}
 
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.css']
})

export class SubscribersComponent {
  constructor(private router: Router ){}
  // gotoaddsubsprofile(){
  //   this.router.navigate(['addprofile']);
  // }

}

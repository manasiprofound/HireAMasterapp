import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-personal',
  templateUrl: './registration-personal.component.html',
  styleUrls: ['./registration-personal.component.scss']
})
export class RegistrationPersonalComponent {
  constructor(private router: Router){}

  reg(){
    this.router.navigate(['masterreg1']);
  }
}

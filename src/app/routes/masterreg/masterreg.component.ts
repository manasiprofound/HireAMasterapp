import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-masterreg',
  templateUrl: './masterreg.component.html',
  styleUrls: ['./masterreg.component.css']
})
export class MasterregComponent {
  constructor(private router: Router){}

  reg(){
    this.router.navigate(['masterreg1']);
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-master-mngavaibility',
  templateUrl: './master-mngavaibility.component.html',
  styleUrls: ['./master-mngavaibility.component.scss']
})
export class MasterMngavaibilityComponent {
  mastermngavaibility = true;
  constructor(private router: Router) { }

  enablemodifymasteracaibility(){
    this.router.navigate(['modifymasteracaibility']);
  } 
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminmaster',
  templateUrl: './adminmaster.component.html',
  styleUrls: ['./adminmaster.component.scss']
})
export class AdminmasterComponent {
  adminmasters = true;
  constructor(private router: Router ){}
}

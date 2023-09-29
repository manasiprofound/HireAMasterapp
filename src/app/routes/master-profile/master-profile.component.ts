import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-master-profile',
  templateUrl: './master-profile.component.html',
  styleUrls: ['./master-profile.component.scss']
})
export class MasterProfileComponent {
  files: File[] = [];
  constructor(private router: Router) { }

  onFileChange(event: any): void {
    console.log('Files: ', event);
  }
}

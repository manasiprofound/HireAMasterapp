import { Component } from '@angular/core';

@Component({
  selector: 'app-registration-complete',
  templateUrl: './registration-complete.component.html',
  styleUrls: ['./registration-complete.component.scss']
})
export class RegistrationCompleteComponent {
  files: File[] = [];

  constructor() { }

  onFileChange(event: any): void {
    console.log('Files: ', event);
  }
}

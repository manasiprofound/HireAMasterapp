import { Component } from '@angular/core';

@Component({
  selector: 'app-registration-verification',
  templateUrl: './registration-verification.component.html',
  styleUrls: ['./registration-verification.component.scss']
})
export class RegistrationVerificationComponent {
  files: File[] = [];

  constructor() { }

  onFileChange(event: any): void {
    console.log('Files: ', event);
  }
}

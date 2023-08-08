import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-personal',
  templateUrl: './registration-personal.component.html',
  styleUrls: ['./registration-personal.component.scss']
})
export class RegistrationPersonalComponent {

  months: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  years: number[] = Array.from({ length: 50 }, (_, i) => new Date().getFullYear() - i);

  dates: number[] = Array.from({ length: (31 - 1) / 1 + 1 }, (value, i) => 1 + i * 1);

  skills: string[] = ['Graphic Designing', 'HTML/CSS', 'Java', 'Maths', 'Science'];

  selectedMonth: string = "";
  selectedYear: number = 1;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Set initial values
    const currentDate = new Date();
    this.selectedMonth = this.months[currentDate.getMonth()];
    this.selectedYear = currentDate.getFullYear();
  }
}

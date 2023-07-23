import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  editskillspage = false;
  skills = true;
  dtOptions: DataTables.Settings = {};

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.dtOptions = {
      lengthChange: false,
      language: {
        paginate: {
          next: '&#x3E;',
          previous: '&#x3C;',
          first: "",
          last: ""
        }
      },
      searching: false,
      columnDefs: [
        {
          orderable: false,
          className: 'select-checkbox',
          targets: 0
        }
      ],
      order: [[1, 'asc']]
    };
  }

  // editskill(){
  //   this.router.navigate(['editskill']);
  // }

  enableeditskill(userspage: string) {
    if (userspage == 'editskillsbutton') {
      console.log('hello');
      this.editskillspage = true;
      this.skills = false;
    } else if (userspage == 'editskillsbutton') {
      this.editskillspage = false;
      this.skills = true;
    }
  }
}



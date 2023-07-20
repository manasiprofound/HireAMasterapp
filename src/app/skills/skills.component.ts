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

  constructor(private router: Router ){}
  
  // editskill(){
  //   this.router.navigate(['editskill']);
  // }

  enableeditskill(userspage: string){
    if(userspage == 'editskillsbutton'){
      console.log('hello');
      this.editskillspage = true;
      this.skills = false;
    }else if(userspage == 'editskillsbutton'){
      this.editskillspage = false;
      this.skills = true;
    }
  }
}



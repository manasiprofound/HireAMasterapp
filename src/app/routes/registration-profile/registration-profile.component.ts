import { Component } from '@angular/core';
import { Editor, Toolbar } from 'ngx-editor';

@Component({
  selector: 'app-registration-profile',
  templateUrl: './registration-profile.component.html',
  styleUrls: ['./registration-profile.component.scss']
})
export class RegistrationProfileComponent {
  editor: Editor = new Editor();
  toolbar: Toolbar = [
    // default value
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['bold', 'italic'],
    ['link'],
    ['ordered_list', 'bullet_list'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  html: any = '<p>Hello World!</p>';

  constructor() { }

  ngOnInit(): void {
    this.editor = new Editor();
  }

  // make sure to destory the editor
  ngOnDestroy(): void {
    this.editor.destroy();
  }
}

import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-admindetails',
  templateUrl: './admindetails.component.html',
  styleUrls: ['./admindetails.component.scss']
})
export class AdmindetailsComponent implements OnInit {

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  @Input() admindetails = { "name": "manasi", "noofseesions": "13" };
  @Output() newadminevent = new EventEmitter<string>();

  addnewadmin(value: string) {
    this.newadminevent.emit(value);
  }
}



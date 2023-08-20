import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminapplicantdetailsComponent } from './adminapplicantdetails.component';

describe('AdminapplicantdetailsComponent', () => {
  let component: AdminapplicantdetailsComponent;
  let fixture: ComponentFixture<AdminapplicantdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminapplicantdetailsComponent]
    });
    fixture = TestBed.createComponent(AdminapplicantdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

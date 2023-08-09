import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminapplicantsdetailsComponent } from './adminapplicantsdetails.component';

describe('AdminapplicantsdetailsComponent', () => {
  let component: AdminapplicantsdetailsComponent;
  let fixture: ComponentFixture<AdminapplicantsdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminapplicantsdetailsComponent]
    });
    fixture = TestBed.createComponent(AdminapplicantsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

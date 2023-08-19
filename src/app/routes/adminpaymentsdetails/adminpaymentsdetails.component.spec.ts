import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpaymentsdetailsComponent } from './adminpaymentsdetails.component';

describe('AdminpaymentsdetailsComponent', () => {
  let component: AdminpaymentsdetailsComponent;
  let fixture: ComponentFixture<AdminpaymentsdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminpaymentsdetailsComponent]
    });
    fixture = TestBed.createComponent(AdminpaymentsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

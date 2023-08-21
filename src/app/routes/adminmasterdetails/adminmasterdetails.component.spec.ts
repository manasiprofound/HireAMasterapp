import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminmasterdetailsComponent } from './adminmasterdetails.component';

describe('AdminmasterdetailsComponent', () => {
  let component: AdminmasterdetailsComponent;
  let fixture: ComponentFixture<AdminmasterdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminmasterdetailsComponent]
    });
    fixture = TestBed.createComponent(AdminmasterdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

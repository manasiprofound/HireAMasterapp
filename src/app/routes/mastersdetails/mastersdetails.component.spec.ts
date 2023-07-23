import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MastersdetailsComponent } from './mastersdetails.component';

describe('MastersdetailsComponent', () => {
  let component: MastersdetailsComponent;
  let fixture: ComponentFixture<MastersdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MastersdetailsComponent]
    });
    fixture = TestBed.createComponent(MastersdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

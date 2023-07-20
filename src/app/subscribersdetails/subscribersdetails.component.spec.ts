import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribersdetailsComponent } from './subscribersdetails.component';

describe('SubscribersdetailsComponent', () => {
  let component: SubscribersdetailsComponent;
  let fixture: ComponentFixture<SubscribersdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubscribersdetailsComponent]
    });
    fixture = TestBed.createComponent(SubscribersdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

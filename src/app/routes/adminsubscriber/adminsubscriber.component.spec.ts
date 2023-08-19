import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsubscriberComponent } from './adminsubscriber.component';

describe('AdminsubscriberComponent', () => {
  let component: AdminsubscriberComponent;
  let fixture: ComponentFixture<AdminsubscriberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminsubscriberComponent]
    });
    fixture = TestBed.createComponent(AdminsubscriberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

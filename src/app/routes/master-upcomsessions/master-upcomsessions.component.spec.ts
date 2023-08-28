import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterUpcomsessionsComponent } from './master-upcomsessions.component';

describe('MasterUpcomsessionsComponent', () => {
  let component: MasterUpcomsessionsComponent;
  let fixture: ComponentFixture<MasterUpcomsessionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasterUpcomsessionsComponent]
    });
    fixture = TestBed.createComponent(MasterUpcomsessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

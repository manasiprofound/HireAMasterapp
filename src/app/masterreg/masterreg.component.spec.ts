import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterregComponent } from './masterreg.component';

describe('MasterregComponent', () => {
  let component: MasterregComponent;
  let fixture: ComponentFixture<MasterregComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasterregComponent]
    });
    fixture = TestBed.createComponent(MasterregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

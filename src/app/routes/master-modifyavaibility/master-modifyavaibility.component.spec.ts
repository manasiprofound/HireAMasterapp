import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterModifyavaibilityComponent } from './master-modifyavaibility.component';

describe('MasterModifyavaibilityComponent', () => {
  let component: MasterModifyavaibilityComponent;
  let fixture: ComponentFixture<MasterModifyavaibilityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasterModifyavaibilityComponent]
    });
    fixture = TestBed.createComponent(MasterModifyavaibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

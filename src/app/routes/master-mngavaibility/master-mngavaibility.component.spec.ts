import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterMngavaibilityComponent } from './master-mngavaibility.component';

describe('MasterMngavaibilityComponent', () => {
  let component: MasterMngavaibilityComponent;
  let fixture: ComponentFixture<MasterMngavaibilityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasterMngavaibilityComponent]
    });
    fixture = TestBed.createComponent(MasterMngavaibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

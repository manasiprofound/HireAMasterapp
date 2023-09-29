import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterProfileComponent } from './master-profile.component';

describe('MasterProfileComponent', () => {
  let component: MasterProfileComponent;
  let fixture: ComponentFixture<MasterProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasterProfileComponent]
    });
    fixture = TestBed.createComponent(MasterProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

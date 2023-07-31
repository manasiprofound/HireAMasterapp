import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationPersonalComponent } from './registration-personal.component';

describe('RegistrationPersonalComponent', () => {
  let component: RegistrationPersonalComponent;
  let fixture: ComponentFixture<RegistrationPersonalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationPersonalComponent]
    });
    fixture = TestBed.createComponent(RegistrationPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

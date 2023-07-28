import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Masterreg1Component } from './masterreg1.component';

describe('Masterreg1Component', () => {
  let component: Masterreg1Component;
  let fixture: ComponentFixture<Masterreg1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Masterreg1Component]
    });
    fixture = TestBed.createComponent(Masterreg1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MastermenuComponent } from './mastermenu.component';

describe('MastermenuComponent', () => {
  let component: MastermenuComponent;
  let fixture: ComponentFixture<MastermenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MastermenuComponent]
    });
    fixture = TestBed.createComponent(MastermenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

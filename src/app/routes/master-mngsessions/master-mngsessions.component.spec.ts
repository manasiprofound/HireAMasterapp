import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterMngsessionsComponent } from './master-mngsessions.component';

describe('MasterMngsessionsComponent', () => {
  let component: MasterMngsessionsComponent;
  let fixture: ComponentFixture<MasterMngsessionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasterMngsessionsComponent]
    });
    fixture = TestBed.createComponent(MasterMngsessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

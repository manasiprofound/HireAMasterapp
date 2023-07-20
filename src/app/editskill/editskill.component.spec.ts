import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditskillComponent } from './editskill.component';

describe('EditskillComponent', () => {
  let component: EditskillComponent;
  let fixture: ComponentFixture<EditskillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditskillComponent]
    });
    fixture = TestBed.createComponent(EditskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

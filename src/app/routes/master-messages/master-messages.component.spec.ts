import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterMessagesComponent } from './master-messages.component';

describe('MasterMessagesComponent', () => {
  let component: MasterMessagesComponent;
  let fixture: ComponentFixture<MasterMessagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasterMessagesComponent]
    });
    fixture = TestBed.createComponent(MasterMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

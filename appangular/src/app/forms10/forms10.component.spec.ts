import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Forms10Component } from './forms10.component';

describe('Forms10Component', () => {
  let component: Forms10Component;
  let fixture: ComponentFixture<Forms10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Forms10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Forms10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

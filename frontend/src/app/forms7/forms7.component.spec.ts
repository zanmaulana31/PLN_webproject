import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Forms7Component } from './forms7.component';

describe('Forms7Component', () => {
  let component: Forms7Component;
  let fixture: ComponentFixture<Forms7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Forms7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Forms7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

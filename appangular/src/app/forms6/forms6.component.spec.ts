import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Forms6Component } from './forms6.component';

describe('Forms6Component', () => {
  let component: Forms6Component;
  let fixture: ComponentFixture<Forms6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Forms6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Forms6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

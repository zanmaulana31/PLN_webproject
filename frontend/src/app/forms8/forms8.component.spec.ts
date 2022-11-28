import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Forms8Component } from './forms8.component';

describe('Forms8Component', () => {
  let component: Forms8Component;
  let fixture: ComponentFixture<Forms8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Forms8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Forms8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

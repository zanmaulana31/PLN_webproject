import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Forms4Component } from './forms4.component';

describe('Forms4Component', () => {
  let component: Forms4Component;
  let fixture: ComponentFixture<Forms4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Forms4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Forms4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

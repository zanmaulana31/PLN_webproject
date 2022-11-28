import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Forms9Component } from './forms9.component';

describe('Forms9Component', () => {
  let component: Forms9Component;
  let fixture: ComponentFixture<Forms9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Forms9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Forms9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

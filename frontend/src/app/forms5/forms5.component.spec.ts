import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Forms5Component } from './forms5.component';

describe('Forms5Component', () => {
  let component: Forms5Component;
  let fixture: ComponentFixture<Forms5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Forms5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Forms5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

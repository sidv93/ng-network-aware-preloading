import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Random2Component } from './random2.component';

describe('Random2Component', () => {
  let component: Random2Component;
  let fixture: ComponentFixture<Random2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Random2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Random2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

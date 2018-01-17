import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeepNestingComponent } from './deep-nesting.component';

describe('DeepNestingComponent', () => {
  let component: DeepNestingComponent;
  let fixture: ComponentFixture<DeepNestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeepNestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeepNestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

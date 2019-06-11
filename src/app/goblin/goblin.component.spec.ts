import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoblinComponent } from './goblin.component';

describe('GoblinComponent', () => {
  let component: GoblinComponent;
  let fixture: ComponentFixture<GoblinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoblinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoblinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

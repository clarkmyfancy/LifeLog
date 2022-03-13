import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalCreatorComponent } from './goal-creator.component';

describe('GoalCreatorComponent', () => {
  let component: GoalCreatorComponent;
  let fixture: ComponentFixture<GoalCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalCreatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

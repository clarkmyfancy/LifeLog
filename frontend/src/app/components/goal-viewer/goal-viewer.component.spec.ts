import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalViewerComponent } from './goal-viewer.component';

describe('GoalViewerComponent', () => {
  let component: GoalViewerComponent;
  let fixture: ComponentFixture<GoalViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalViewerComponent } from './journal-viewer.component';

describe('JournalViewerComponent', () => {
  let component: JournalViewerComponent;
  let fixture: ComponentFixture<JournalViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JournalViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

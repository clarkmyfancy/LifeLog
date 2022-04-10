import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryChooserComponent } from './category-chooser.component';

describe('CategoryChooserComponent', () => {
  let component: CategoryChooserComponent;
  let fixture: ComponentFixture<CategoryChooserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryChooserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
